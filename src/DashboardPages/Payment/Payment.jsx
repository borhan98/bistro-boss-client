import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../Components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK); // TODO: add publishable key

const Payment = () => {
    return (
        <div>
            <SectionTitle subHeader={"Please payment"} header={"Payment"} />
            <Elements stripe={stripePromise}>
                <Checkout />
            </Elements>
        </div>
    );
};

export default Payment;