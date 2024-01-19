import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';
import SectionTitle from '../../../Components/SectionTitle';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK); // TODO: add publishable key

const Payment = () => {
    return (
        <div className='p-6'>
            <SectionTitle subHeader={"Please payment"} header={"Payment"} />
            <Elements stripe={stripePromise}>
                <Checkout />
            </Elements>
        </div>
    );
};

export default Payment;