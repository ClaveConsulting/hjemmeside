import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { COLOR_CLAVE_PINK, COLOR_CLAVE_GREEN } from '../colors';
import { ColorContext } from './Layout';

const ClaveLink = ({ to, href, children, className, ...props }) => {
  const { textColor } = useContext(ColorContext);

  const ColoredLink = styled(href ? StyledAnchor : StyledLink)`
    color: ${textColor || COLOR_CLAVE_GREEN};
  `;

  return (
    <ColoredLink className={className} to={to} {...props}>
      {children}
    </ColoredLink>
  );
};

const ANCHOR_STYLES = `
  @media only screen and (max-width: 600px) {
    display: none;
  }
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 1px solid ${COLOR_CLAVE_PINK};
`;

const StyledAnchor = styled.a`
  ${ANCHOR_STYLES}
`;

const StyledLink = styled(Link)`
  ${ANCHOR_STYLES}
`;

export default ClaveLink;
