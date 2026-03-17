import React from "react";
import { ColorContext } from "./Layout";
import Header from "./Header";

const HeaderWithContext = ({ backgroundColor, textColor, ...props }) => (
  <ColorContext.Provider value={{ backgroundColor, textColor }}>
    <Header {...props} />
  </ColorContext.Provider>
);

export default HeaderWithContext;
