import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JT6tCAswkUBBvvIyNhg1naY1WAshFiBhNmGtIfkMYWWsKbIl5RKbJXlJcfUUGRfNYOhudr3bHk94QyeTtXOq5VQ00E4t8LolZ';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful!');
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
