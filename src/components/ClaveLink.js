import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { COLOR_CLAVE_PINK, COLOR_CLAVE_GREEN } from '../colors';

const ClaveLink = ({ to, children, className }) => (
  <StyledLink className={className} to={to}>{children}</StyledLink>
);

const StyledLink = styled(Link)`
  color: ${COLOR_CLAVE_GREEN};
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 1px solid ${COLOR_CLAVE_PINK};
`;

export default ClaveLink;