import React from "react";
import mainLogo from "../../assets/wakey-main-logo.png.png";
import { SContentMain } from "./header-content.styles";

function HeaderContent() {
  return (
    <SContentMain>
      <div className="description-side">
        <h2 className="title-humanizing">The Key to Being Awake</h2>
        <p className="description-humanizing">
          WRİTE TEXT HERE, WRİTE TEXT HERE, WRİTE TEXT HERE,
        </p>
        <button className="view-plans-button">ÜBER UNS</button>
      </div>
      <div className="img-side">
        <img src={mainLogo} alt="" className="companyimg" />
      </div>
    </SContentMain>
  );
}
export default HeaderContent;
