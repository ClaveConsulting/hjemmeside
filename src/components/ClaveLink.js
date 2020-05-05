import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes, css } from 'styled-components';
import { COLOR_CLAVE_PINK, COLOR_CLAVE_GREEN, COLOR_CLAVE_YELLOW } from '../colors';
import { ColorContext } from './Layout';
import { onMobile } from './Breakpoints';

const ClaveLink = ({ to, children, className, ...props }) => {
  const { textColor } = useContext(ColorContext);

  const ColoredLink = styled(props.href ? StyledAnchor : StyledLink)`
    color: ${textColor || COLOR_CLAVE_GREEN};
  `;

  return (
    <Underline>
      <ColoredLink className={className} to={to} {...props}>
        {children}
      </ColoredLink>
    </Underline>
  );
};

const hoverKeyframes = keyframes`
0% {
  background: ${COLOR_CLAVE_PINK};
  transform: scaleX(1);
}
50% {
  background: ${COLOR_CLAVE_PINK};
  transform: scaleX(0.0); }

51% {
  background: ${COLOR_CLAVE_YELLOW};
  transform: scaleX(0.0); }
100% {
  background: ${COLOR_CLAVE_YELLOW};
  transform: scaleX(1.0);
}
`;

const hoverAnimation = props => css`
  ${hoverKeyframes} 0.5s;
`;

const Underline = styled.div`
  display: flex;
  flex-direction: column;
  &:after {
    content: '';
    margin-top: 5px;
    display: block;
    height: 1px;
    background: ${COLOR_CLAVE_PINK};
  }
  &:hover:after {
    content: '';
    margin-top: 5px;
    display: block;
    height: 1px;
    animation: ${hoverAnimation};
    animation-fill-mode: forwards;
  }

  ${onMobile(`
    display: none;
  `)}
`;

const ANCHOR_STYLES = `
  ${onMobile(`
    display: none;
  `)}
  text-decoration: none;
`;

const StyledAnchor = styled.a`
  ${ANCHOR_STYLES}
`;
const StyledLink = styled(Link)`
  ${ANCHOR_STYLES}
`;

export default ClaveLink;
