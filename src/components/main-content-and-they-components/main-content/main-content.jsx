import React from "react";
import ManyImportantThings from "../many-important-things/many-important-things";
import { SMainContent } from "./main-content.styles";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <SMainContent>
      <h2 className="main-content__title">We’re different</h2>

      <ManyImportantThings />

      <div className="find-more-bar">
        <img src="" alt="" className="design-img" />
        <h2 className="describle">Für weitere İnformationen</h2>
        <Link to={"/order"}>
          <button className="how-we-work-button">Bestellung</button>
        </Link>
      </div>
    </SMainContent>
  );
}
export default MainContent;
