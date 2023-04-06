import React, { useState } from 'react';
import MingSpacePricingCard from '../components/index';
import './style.css';
import { pricingMockData } from '../../constants/pricingMockData';

export default function MingSpacePricing() {
  const [priceVariant, setPriceVariant] = useState(0);

  return (
    <>
      <div className="ming-space-pricing-container">
        <div className="pricing-toggle">
          <span className="pricing-toggle-label">Monthly</span>{' '}
          <label className="switch">
            <input
              type="checkbox"
              id="toggle"
              value={priceVariant}
              onChange={(event) => {
                setPriceVariant(priceVariant === 0 ? 1 : 0);
                console.log('console1', event.target.value);
              }}
            />
            <span className="slider round"></span>
          </label>{' '}
          <span className="pricing-toggle-label">Yearly</span>
        </div>
        <div class="pricing-container">
          {pricingMockData.map((data, index) => {
            data.price = priceVariant ? data.pricingYear : data.pricingMonth;
            return (
              <MingSpacePricingCard data={data} priceVariant={priceVariant} />
            );
          })}
        </div>
      </div>
    </>
  );
}
