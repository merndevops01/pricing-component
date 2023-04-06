import React from 'react';
import './style.css';

export default function MingSpacePricingCard(props) {
  const { planType, price, feature } = props.data;

  return (
    <>
      <div className="pricing-card">
        <h2>{planType}</h2>
        <h3>{price}</h3>
        <ul className="pricing-feature">
          {feature.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </>
  );
}
