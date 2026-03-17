import React from "react";
import { ColorContext } from "./Layout";
import JoinSection from "./JoinSection";
import { COLOR_CLAVE_BLUE, COLOR_CLAVE_LIGHTBLUE } from "../colors";

const JoinSectionWithContext = (props) => (
  <ColorContext.Provider
    value={{
      backgroundColor: props.backgroundColor ?? COLOR_CLAVE_LIGHTBLUE,
      textColor: props.textColor ?? COLOR_CLAVE_BLUE,
    }}
  >
    <JoinSection {...props} />
  </ColorContext.Provider>
);

export default JoinSectionWithContext;
