import React from "react";
///////////////////////IMAGES/////////////////////////////////////
import wakeywrite from "../../assets/wakey-project-logo.png"
import logoInsure from "../../assets/insure-logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { SSectionEnd } from "./social-media-info";
//////////////////////////////////////////////////////////////////
function SocialMediaInfo() {
  return (
    <SSectionEnd>
      <div className="logo-side">
        <img src={wakeywrite} alt="" className="last-logo" />
      </div>
      <div className="social-media">
        <a
          href="https://www.facebook.com/profile.php?id=100092244324654"
          className="facebook-link"
        >
          <img src={facebook} className="facebook" alt="" />
        </a>
        <a href="https://twitter.com/WakeyProject" className="twitter-link">
          <img src={twitter} className="twitter" alt="" />
        </a>
        <a
          href="https://www.instagram.com/wakey_projekt/"
          className="instagram-link"
        >
          <img src={instagram} className="instagram" alt="" />
        </a>
      </div>
    </SSectionEnd>
  );
}
export default SocialMediaInfo;
