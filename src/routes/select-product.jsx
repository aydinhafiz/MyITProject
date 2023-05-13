import React, { useState } from "react";

import "../components/select-product-components/select-product.css";
import einkaufswagen from "../assets/einkaufswagen-picture.png";

import SelectHeader from "../components/select-product-components/select-header/select-header";

import plus from "../assets/plus-img.svg";
import minus from "../assets/minus-img.png";
import wakeyproduct from "../assets/wakey-main-logo.png.png";

function SelectProduct() {
  const [productNumber, setProductNumber] = useState(0);
  const handleclick = () => {
    setProductNumber(productNumber + 1);
  };

  const minusclick = () => {
    if (productNumber > 0) setProductNumber(productNumber - 1);
  };

  return (
    <div className="select-product-container">
      <SelectHeader />
      <div className="order-content">
        <div className="order-product">
          <div className="product-picture-description">
            <img src={wakeyproduct} alt="" className="product-show-img" />
          </div>

          <div className="product-describle-information">
            <h3 className="company-name">Wakey</h3>
            <h2 className="product-name">Wakeygum Minz</h2>
            <p className="product-description">minz USW</p>
            <div className="product-sale">
              <div className="product-sale-info">
                <span className="product-price">$1.25</span>
                <button className="sale-in-procent">50%</button>
              </div>
              <span className="old-price">$2.50</span>
            </div>

            <div className="payment-method">
              <div className="product-number">
                <img
                  onClick={minusclick}
                  src={minus}
                  alt=""
                  className="minus"
                />
                <span className="product-numbers">{productNumber}</span>
                <img onClick={handleclick} src={plus} alt="" className="plus" />
              </div>
              
              <div className="delivery-button-bar">
                <img src={einkaufswagen} alt="" className="einkaufswagen" />
                <button className="delivery-button">Zur Kasse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectProduct;
