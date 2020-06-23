import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { COLOR_CLAVE_PINK, COLOR_CLAVE_GREEN } from '../colors';
import { ColorContext } from './Layout';
import { onMobile } from './Breakpoints';

const FooterLink = ({ to, children, className, ...props }) => {
  const { textColor } = useContext(ColorContext);

  const ColoredLink = styled(props.href ? StyledAnchor : StyledLink)`
    color: ${textColor || COLOR_CLAVE_GREEN};
  `;

  return (
    <ColoredLink className={className} to={to} {...props}>
      {children}
    </ColoredLink>
  );
};

const ANCHOR_STYLES = `
  text-decoration: none;
  &:hover{
    text-decoration: underline;
    color: ${COLOR_CLAVE_PINK};
  }
`;

const StyledAnchor = styled.a`
  ${ANCHOR_STYLES}
`;

const StyledLink = styled(Link)`
  ${ANCHOR_STYLES}
`;

export default FooterLink;
