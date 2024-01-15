import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const Checkout = () => {
    const stripe = useStripe();
  const elements = useElements();

    const handleSubmit = async (e) => {
        e.prevendDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={{
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
            <button type="submit" disabled={!stripe}>Pay</button>
        </form>
    );
};

export default Checkout;