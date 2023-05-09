import React from "react";
import { SImportantThing } from "./important-thing";
import styled from "styled-components";

const SImportant = styled.div`
  max-width: 350px;
  margin-right: 30px;

  .important-img-bar {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 86px;
    height: 86px;
    background-color: #96a9c6;
    border-radius: 50%;
    margin-bottom: 32px;
  }

  .important-description {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.388889px;

    color: #2c2830;
  }

  .important-paragraph {
    font-family: "Karla";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #837d88;
    margin-top: 16px;
  }
`;

function ImportantThing(props) {
  const { importantDescription, paragraph, productImage } = props;
  return (
    <SImportant>
      <div className="important-img-bar">
        <img className="important-img" src={productImage} alt="" />
      </div>
      <span className="important-description">{importantDescription}</span>
      <p className="important-paragraph">{paragraph}</p>
    </SImportant>
  );
}
export default ImportantThing;
