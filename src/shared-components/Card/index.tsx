import React from 'react';
import Button from '../Button';
import './Card.scss';

export interface Props {}

export default function Card(props: Props) {
  return (
    <div className="container">
      <div className="product-card">
        <div className="product-card__img">
          <img
            src={
              'https://www.simplyrecipes.com/thmb/RiK7px2b_-buGiK2w55_jdRiAKM=/1333x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'
            }
            alt="backgroundImage"
          />
        </div>
        <div className="product-card__content">
          <div className="product-card__name-group">
            <div className="product-card__name">
              <p>Pepperoni Pizza</p>
            </div>
            <div className="product-card__attribute">
              <div className="product-card__icon">
                <img src="/icons/wheat.svg" alt="" />
              </div>
              <div className="product-card__icon">
                <img src="/icons/fire.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="product-card__detail">
            <div className="product-card__description">
              <p>
                The beautiful range of Apple Naturalé that has an exciting mix
                of natural ingredients. With the Goodness of 100% Natural
                Ingredients
              </p>
            </div>

            <div className="product-card__element">
              <p>256 Cal</p>
              <p>P/F/C: 12/10/31</p>
              <p>53.8*C</p>
            </div>
          </div>

          <div className="product-card__price-group">
            <div className="product-card__price">
              <p className="current-price">$23.90</p>
              <p className="old-price">$23.90</p>
            </div>
            <div className="product-card__order-button">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
