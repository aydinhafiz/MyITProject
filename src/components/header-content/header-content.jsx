import React from "react";
import familyİmg from "../../assets/family.jpg";
import { SContentMain } from "./header-content.styles";

function HeaderContent() {
  return (
    <SContentMain>
      <div className="description-side">
        <h2 className="title-humanizing">Humanizing your insurance.</h2>
        <p className="description-humanizing">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="view-plans-button">VIEW PLANS</button>
      </div>
      <div className="img-side">
        <img src={familyİmg} alt="" className="companyimg" />
      </div>
    </SContentMain>
  );
}
export default HeaderContent;
