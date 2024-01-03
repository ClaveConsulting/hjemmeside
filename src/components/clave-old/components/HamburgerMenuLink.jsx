import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { COLOR_CLAVE_PINK, COLOR_CLAVE_GREEN, COLOR_CLAVE_YELLOW } from '../colors';
import { ColorContext } from './Layout';

const HamburgerMenuLink = ({ to, children, className, active, ...props }) => {
  const { textColor } = useContext(ColorContext);

  const ColoredLink = styled(Link)`
    color: ${textColor || COLOR_CLAVE_GREEN};
    text-decoration: none;
    border-bottom: 1px solid ${active ? COLOR_CLAVE_YELLOW: COLOR_CLAVE_PINK};
    display: table;
    padding: 0.5rem 0;
  `;

  return (
    <ColoredLink className={className} to={to} {...props}>
      {children}
    </ColoredLink>
  );
};

export default HamburgerMenuLink;
