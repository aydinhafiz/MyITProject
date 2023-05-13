import React from "react";
import { SManyImportantThings } from "./many-important-things.styles";
import ImportantThing from "../../important-thing/important-thing.jsx";
import minz from "../../../assets/minz-picture.png";
import wassermelone from "../../../assets/wassermelone-picture.png";

function ManyImportantThings() {
  const dataImportantThings = [
    {
      img: minz,
      importantDescription: "MİNZ",
      importantparagraph:
        "Minz-Kaugummis sind auch dafür bekannt, einen frischen Atem zu fördern, da sie dazu beitragen können, Mundgeruch zu neutralisieren und das Gefühl von Sauberkeit und Frische im Mund zu vermitteln.",
    },
    {
      img: wassermelone,
      importantDescription: "WASSERMELONE",
      importantparagraph:
        "Beim Kauen von Wassermelone-Kaugummis entsteht ein süßes und erfrischendes Gefühl im Mund, das oft als angenehm empfunden wird. Der Geschmack kann auch eine leichte Säurenote enthalten, die das Erlebnis noch interessanter macht.",
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
