import React from "react";
import { SHeader } from "./home-header.styles";
///////////////////////////////IMAGES/////////////////////
import insure from "../../assets/insure-logo.svg";
import wakeywrite from "../../assets/wakey-project-logo.png";
//////////////////////////////////////////////////////////

function Header() {
  return (
    <SHeader>
      <div className="logo-bar">
        <img src={wakeywrite} alt="" className="logo-img" />
      </div>
      <div className="options">
        <span className="options-item">GEPA</span>
        <span className="options-item">GESCHMACK</span>
        <span className="options-item">ÜBER UNS</span>
        <span className="options-item">BESTELLEN</span>
      </div>
    </SHeader>
  );
}
export default Header;
