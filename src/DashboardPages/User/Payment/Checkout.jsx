import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import moment from "moment";
import toast from "react-hot-toast";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";


const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [err, setErr] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxios();
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    const totalPrice = cart.reduce((total, current) => total + current.price, 0);

    function getUTCtime() {
        const offsetMin = new Date().getTimezoneOffset();
        const utcDate = new Date(new Date().getTime() + (offsetMin * 60 * 1000));
        const dateFormat = moment(utcDate).format("Do MMM, YYYY");
        return dateFormat;
    }

    useEffect(() => {
        if (totalPrice) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice }).then(res => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret);
            })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            console.log("Payment error", error);
            setErr(error.message);
        } else {
            console.log("paymentMethod", paymentMethod);
            setErr("");
        }

        // confirm payment
        const { err, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    email: user?.email || "Annonymouse",
                    name: user?.displayName || "Annonymouse"
                }
            }
        });

        if (err) {
            console.log("Confirm payment error", err);
        } else {
            if (paymentIntent.status === "succeeded") {
                console.log(paymentIntent);
                setTransactionId(paymentIntent.id);

                // Save the payment and order info to database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    menuIds: cart.map(item => item.menuId),
                    deletedIds: cart.map(item => item._id),
                    date: getUTCtime(),
                    status: "pending",
                }
                const res = await axiosSecure.post("/payment", payment);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    toast.success("Payment success", {
                        style: {
                            backgroundColor: "#080808",
                            color: "#FFF"
                        }
                    })
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white max-w-lg p-6 rounded-md mx-auto">
            <CardElement className="border p-4" options={{
                style: {
                    base: {
                        "fontSize": '16px',
                        "color": "#424770",
                        "::placeholder": {
                            "color": "#aab7c4",
                        },
                    },
                    invalid: {
                        "color": "#9e2146",
                    }
                }
            }} />
            <button className={`p-2 justify-self-end rounded-md text-white w-28 text-lg font-bold mt-6 ${!stripe || !clientSecret ? "bg-[#d19f5454] cursor-not-allowed" : "bg-[#D1A054]"} `} type="submit" disabled={!stripe || !clientSecret}>Pay</button>
            <p><small className="text-red-500">{err}</small></p>
            {
                transactionId && <p className="text-green-400 mt-4">TransactionID: {transactionId} </p>
            }
        </form>
    );
};

export default Checkout;