import React from "react";
import { SHeader } from "../components/home-header/home-header.styles";
import wakeywrite from "../assets/wakey-project-logo.png";
import { Link } from "react-router-dom";
import { SUberUnsContainer } from "../components/über-uns/über-uns.styles";
import wakeyLogo from "../assets/wakey-main-logo.png.png";
function UberUns() {
  return (
    <SUberUnsContainer>
      <SHeader>
        <div className="logo-bar">
          <img src={wakeywrite} alt="" className="logo-img" />
        </div>
        <div className="options">
          <span className="options-item">GEPA</span>
          <span className="options-item"></span>
          <span className="options-item">GESCHMACK</span>
          <Link to={"/order"}>
            <span className="options-item">BESTELLEN</span>
          </Link>
        </div>
      </SHeader>
      <div className="uber-uns-bar">
        <h2 className="about-us">Über Uns</h2>
        <p className="uber-uns">
          Hallo und herzlich willkommen bei Wakey! Wir wollen Menschen dabei
          helfen, wach und konzentriert zu bleiben, ob im Büro, beim Lernen oder
          bei der Arbeit an Projekten. Unser Wakey Kaugummi besteht aus
          fairtrade und hochwertigen Koffein. Unsere Kaugummis basieren auf
          Chicle, einer natürlichen Kaumasse aus Bäumen in Mittel- und
          Südamerika. Er enthält auch erfrischenden Pfefferminzextrakt oder
          fruchtigen Melonenextrakt und andere natürliche Aromen. Uns ist
          wichtig, dass unser Kaugummi aus biologisch abbaubaren Zutaten besteht
          und die Verpackung aus recyceltem Papier ist. Wir arbeiten mit der
          Fairtrade-Organisation Gepa zusammen, um sicherzustellen, dass unsere
          Rohstoffe unter fairen Bedingungen angebaut und gehandelt werden. Wir
          setzen uns dafür ein die Lebensbedingungen zu verändern von
          Kleinbauern und ihren Familien. Wir sind stolz darauf, ein Produkt
          anzubieten, das nicht nur energiegeladen und erfrischend ist, sondern
          auch die Umwelt schützt und eine positive Auswirkung auf die
          Gesellschaft hat. Probieren Sie Wakey noch heute und erleben Sie den
          Unterschied! Und übrigens, wenn Sie Wakey aufbewahren möchten, lagern
          sie Ihren Wakey Kaugummi einfach in der Originalverpackung an einem
          trockenen und kühlen Ort.
        </p>
      </div>
    </SUberUnsContainer>
  );
}
export default UberUns;
