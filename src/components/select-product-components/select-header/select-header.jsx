import React from "react";
import { Link } from "react-router-dom";
import { SSelectHeader } from "./select-header.styles";

import wakeywrite from "../../../assets/wakey-project-logo.png";

function SelectHeader() {
  return (
    <SSelectHeader>
      <div className="logo-bar">
        <Link to={"/"}>
          <img src={wakeywrite} alt="" className="logo-img" />
        </Link>
      </div>
      <div className="options">
        <Link
          to="https://www.gepa.de/home.html"
          style={{ textDecoration: "none" }}
        >
          <span className="options-item">GEPA</span>
        </Link>
        <span className="options-item"></span>
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <span className="options-item">ÜBER UNS</span>
        </Link>
        <Link to={"/"}>
          <span className="options-item">HOME</span>
        </Link>
      </div>
    </SSelectHeader>
  );
}
export default SelectHeader;
