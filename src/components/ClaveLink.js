import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { COLOR_CLAVE_PINK, COLOR_CLAVE_GREEN } from '../colors';
import { ColorContext } from './Layout';
import { onMobile } from './Breakpoints';

export const ignoreStyle = styles => '';

const ClaveLink = ({ to, children, className, showOnMobile, ...props }) => {
  const { textColor } = useContext(ColorContext);

  const ANCHOR_STYLES = `
  ${(showOnMobile ? ignoreStyle : onMobile)(`
    display: none;
  `)}
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

  const ColoredLink = styled(props.href ? StyledAnchor : StyledLink)`
    color: ${textColor || COLOR_CLAVE_GREEN};
  `;

  return (
    <ColoredLink className={className} to={to} {...props}>
      {children}
    </ColoredLink>
  );
};

export default ClaveLink;
