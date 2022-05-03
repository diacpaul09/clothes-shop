import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KvMgTBV5ckyfguIhl7ipNPTfsC9tX7WCW1kUIF9D7jXN1rIk3qzF4sZJNRxDpAdmowpf0rfrWgnwV98Gr8SABPu00EZqHkCP2'

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return (
        <StripeCheckout label='Pay now'
            name='Clothes Shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey} />
    )

}

export default StripeCheckoutButton