import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JT6tCAswkUBBvvIyNhg1naY1WAshFiBhNmGtIfkMYWWsKbIl5RKbJXlJcfUUGRfNYOhudr3bHk94QyeTtXOq5VQ00E4t8LolZ';

  const onToken = (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful!');
      })
      .catch((error) => {
        console.log('Payment error :', JSON.parse(error));
        alert(
          'there was an issue with your payment. Please sure you use the provided credit card'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      shippingAddress
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
