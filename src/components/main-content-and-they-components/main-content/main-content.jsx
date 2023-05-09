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
        <h2 className="describle">Find out more about how we work</h2>
        <button className="how-we-work-button">HOW WE WORK</button>
      </div>
    </SMainContent>
  );
}
export default MainContent;
