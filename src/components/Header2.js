import React, { useState } from 'react';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './icons/clave-logo.svg';
import { Link } from 'gatsby';
import hamburgerIcon from './icons/hamburgermeny_ikon.svg';
import { onDesktop, onMobile } from './Breakpoints';
import HamburgerMenuLink from './HamburgerMenuLink';
import { Container, DESKTOP_PADDING, MOBILE_PADDING } from './Layout';

const Header2 = ({
                   backgroundColor,
                   textColor,
                 }) => {
  const HamburgerDiv = styled.div`
    padding-bottom: 2rem;
    ${onDesktop(`
      display: none;
    `)}
  `;
  const [menuExpanded, setMenuExpanded] = useState(false);
  const LinkComponent = styled(ClaveLink)`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  `;

  const HamburgerMenyOptions = () => {
    return menuExpanded ? (
      <HamburgerDiv>
        <HamburgerMenuLink to="/hva-vi-gjor">
          Se hva vi gjør
        </HamburgerMenuLink>
        <HamburgerMenuLink to="/hvem-vi-er">
          Se hvem vi er
        </HamburgerMenuLink>
        <HamburgerMenuLink to="/kontakt-oss">
          Kontakt oss
        </HamburgerMenuLink>
      </HamburgerDiv>
    ) : (
      ''
    );
  };

  const HamburgerKnapp = ({ color }) => {
    const StyledHamburgerIcon = styled(hamburgerIcon)`
  width: 2rem;
  height: auto;
  fill: ${color}
`;
    return (
      <StyledHamburgerIcon onClick={() => setMenuExpanded(!menuExpanded)} />
    );
  };

  const WrapperComponent = styled(Wrapper)`
        background: ${backgroundColor};
      `;

  return (
    <header>
      <Container>
        <Container.Content>
          <StyledHeader frontPage={false}>
            <WrapperComponent>
              <Link to="/">
                <Logo textColor={textColor}/>
              </Link>
              <InlineWrapper>
                <LinkComponent to="/hva-vi-gjor">
                  Se hva vi gjør
                </LinkComponent>
                <LinkComponent to="/hvem-vi-er">
                  Se hvem vi er
                </LinkComponent>
                <LinkComponent to="/kontakt-oss">
                  Kontakt oss
                </LinkComponent>
              </InlineWrapper>
              <HamburgerKnapp/>
            </WrapperComponent>
            <HamburgerMenyOptions/>
          </StyledHeader>
        </Container.Content>
      </Container>
    </header>
  );
};

const PADDING_TOP_DESKTOP = '4rem';
const PADDING_BOTTOM_DESKTOP = '6rem';

const PADDING_TOP_MOBILE = '1.5rem';
const PADDING_BOTTOM_MOBILE = '4.75rem';

export const Logo = ({ textColor }) => {
  const ColoredLogo = styled(ClaveLogo)`
    fill: ${textColor || COLOR_CLAVE_GREEN};
     width: 5rem;
    height: auto;
  `;
  return <ColoredLogo/>;
};

const HamburgerButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  ${onDesktop(`
    display: none;
  `)}
`;

const StyledHeader = styled.header`
    padding: 0 ${MOBILE_PADDING};
    ${onDesktop(`
      padding: 0 ${DESKTOP_PADDING};
    `)}
`;


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  padding-bottom: ${PADDING_BOTTOM_DESKTOP};
  `)}
      ${onMobile(`
  padding-top: ${PADDING_TOP_MOBILE};
  padding-bottom: ${PADDING_BOTTOM_MOBILE};
  `)}
  
`;

const InlineWrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 75%;
`;

const StyledHamburgerIcon = styled(hamburgerIcon)`
  width: 2rem;
  height: auto;
`;

export default Header2;
