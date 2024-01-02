import React from "react";
import styled from "styled-components";
import { LeftArrowLink } from "./ClaveLink";

export const BackLink = ({to}) => {
  return (
    <Padder>
      <LeftArrowLink showOnMobile to={to}>Tilbake</LeftArrowLink>
    </Padder>
  )
}

const Padder = styled.div`padding-left: 40px;`