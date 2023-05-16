import React from "react";
import { SAlertContainer } from "../components/payment/payment.styles";

function Payment() {
  return (
    <SAlertContainer>
      <div class="gradient-border">
        Es tut uns leid ihnen dies mitteilen zu müssen
        <br />
        <br />
        aber dieses Produkt
        <br />
        <br />
        ist nur ein Schulprojekt! :(
      </div>
      {/* <div className="Alert">
        <h2 className="mitteilung">
          Es tut uns leid ihnen dies mitteilen zu müssen, aber dieses Produkt
          ist nur ein Schulprojekt!
        </h2>
      </div> */}
    </SAlertContainer>
  );
}
export default Payment;
