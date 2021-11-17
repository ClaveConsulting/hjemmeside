import React from "react";
import styled from 'styled-components';
import { onMobile } from "./Breakpoints";

export const Ingress = styled.p`  
  font-size: 3rem;
  line-height: 3.75rem;
  font-weight: 400;
  ${onMobile(`    
    font-size: 1.5rem;
    line-height: 2rem;
  `)}
`