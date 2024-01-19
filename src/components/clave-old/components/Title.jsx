import React from 'react';
import styled from 'styled-components';
import { COLOR_CLAVE_GREEN } from '../colors';


const StyledWrapper = styled.h1`
  color: ${props => props.color};
  @media only screen and (min-width: 600px) {
  font-size:3rem;
  }
`;
const Title = ({ children, color = COLOR_CLAVE_GREEN, className }) => (
  <StyledWrapper className={className} color={color}>{children}</StyledWrapper>
);

export default Title;
