import React from "react";
import styled from "styled-components";

const SImportant = styled.div`
  margin-right: 60px;
  margin-left: 60px;
  max-width: 1110px;
  .img-background {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #96a9c6;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    margin-bottom: 32px;
  }
  .product-description {
    flex-wrap: wrap;
    max-width: 350px;
  }
  .product-title {
    margin-bottom: 16px;
  }
  .product-img {
    width: auto;
    height: 60px;
  }
`;

function ImportantThing(props) {
  const { description, paragraph, productImage } = props;
  return (
    <SImportant>
      <div className="img-background">
        <img src={productImage} alt="" className="product-img" />
      </div>
      <h2 className="product-title">{description}</h2>
      <p className="product-description">{paragraph}</p>
    </SImportant>
  );
}
export default ImportantThing;
