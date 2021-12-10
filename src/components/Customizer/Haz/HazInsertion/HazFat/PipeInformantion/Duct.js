import React from "react";

import DuctRectangular from "./DuctRectangular";
import DuctRound from "./DuctRound";
function Duct({ handleChange, value, ductShape }){
  return (
    <>
      { ductShape === 'rectangular'? (
        <DuctRectangular />
      ) : (
        <DuctRound />
      )}
    </>
  );
}

export default Duct;
