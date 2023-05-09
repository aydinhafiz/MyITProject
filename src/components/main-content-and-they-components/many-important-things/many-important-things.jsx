import React from "react";
import { SManyImportantThings } from "./many-important-things.styles";
import ImportantThing from "../../important-thing/important-thing.jsx";
import blitz from "../../../assets/blitz.png";
function ManyImportantThings() {
  const dataImportantThings = [
    {
      img: { blitz },
      importantDescription: "Snappy Process",
      importantparagraph: "Snappy Process",
    },
    {
      img: "../../../assets/blitz.png",
      importantDescription: "Snappy Proces",
      importantparagraph: "Snappy Process",
    },
    {
      img: "../../../assets/blitz.png",
      importantDescription: "Snappy Proce",
      importantparagraph: "Snappy Process",
    },
  ];
  return (
    <SManyImportantThings>
      {dataImportantThings.map(function (data) {
        return (
          <ImportantThing
            key={data.importantDescription}
            description={data.importantDescription}
            paragraph={data.importantparagraph}
            productImage={data.img}
          />
        );
      })}
    </SManyImportantThings>
  );
}
export default ManyImportantThings;
