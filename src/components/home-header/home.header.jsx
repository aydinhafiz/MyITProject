import React from "react";
import { SHeader } from "./home-header.styles";
///////////////////////////////IMAGES/////////////////////
import insure from "../../assets/insure-logo.svg";
//////////////////////////////////////////////////////////

function Header() {
  return (
    <SHeader>
      <div className="logo-bar">
        <img src={insure} alt="" className="logo-img" />
      </div>
      <div className="options">
        <span className="options-item">HOW WE WORK</span>
        <span className="options-item">BLOG</span>
        <span className="options-item">ACCOUNT</span>
        <span className="options-item">VIEW PLANS</span>
      </div>
    </SHeader>
  );
}
export default Header;
