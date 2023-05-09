import React from "react";
import "../home.css";
import Header from "../components/home-header/home.header";
import HeaderContent from "../components/header-content/header-content";

/////////////////////////IMAGES//////////////////////////////

import MainContent from "../components/main-content-and-they-components/main-content/main-content";
import SocialMediaInfo from "../components/social-media-info/social-media-info.jsx";

////////////////////////////////////////////////////////////
function Home() {
  return (
    <div className="home-container">
      <Header />
      <HeaderContent />
      <MainContent />
      <SocialMediaInfo />
    </div>
  );
}
export default Home;
