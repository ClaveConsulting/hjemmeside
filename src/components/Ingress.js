import styled from 'styled-components';
import { onMobile } from "./Breakpoints";

export const Ingress = styled.p`  
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 400;
  ${onMobile(`    
    font-size: 1.5rem;
    line-height: 2rem;
  `)}
`