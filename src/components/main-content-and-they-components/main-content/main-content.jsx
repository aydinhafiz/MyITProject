import React from "react";
import ManyImportantThings from "../many-important-things/many-important-things";
import { SMainContent } from "./main-content.styles";

function MainContent() {
  return (
    <SMainContent>
      <h2 className="main-content__title">We’re different</h2>

      <ManyImportantThings />

      <div className="find-more-bar">
        <img src="" alt="" className="design-img" />
        <h2 className="describle">Für weitere İnformationen</h2>
        <button className="how-we-work-button">Bestellung</button>
      </div>
    </SMainContent>
  );
}
export default MainContent;
