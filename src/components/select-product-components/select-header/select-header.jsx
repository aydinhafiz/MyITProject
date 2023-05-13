import React from "react";
import { Link } from "react-router-dom";
import { SSelectHeader } from "./select-header.styles";

import wakeywrite from "../../../assets/wakey-project-logo.png";

function SelectHeader() {
  return (
    <SSelectHeader>
      <div className="logo-bar">
        <img src={wakeywrite} alt="" className="logo-img" />
      </div>
      <div className="options">
        <span className="options-item">GEPA</span>
        <span className="options-item">GESCHMACK</span>
        <span className="options-item">ÜBER UNS</span>
        <Link to={"/"}>
          <span className="options-item">HOME</span>
        </Link>
      </div>
    </SSelectHeader>
  );
}
export default SelectHeader;
