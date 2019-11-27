import React, { useContext, useState } from 'react';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './icons/clave-logo.svg';
import { Link } from 'gatsby';
import hamburgerIcon from './icons/hamburgermeny_ikon.svg';
import { ColorContext, Container, DESKTOP_PADDING, MOBILE_PADDING } from './Layout';
import { onDesktop } from './Breakpoints';
import HamburgerMenuLink from './HamburgerMenuLink';

const Header = ({ frontPage = false, useSkinColoredHamburgerMenu = false }) => {
  const HamburgerDiv = styled.div`
    padding-bottom: 2rem;
    ${onDesktop(`
      display: none;
    `)}
  `;
  const [menuExpanded, setMenuExpanded] = useState(false);
  const LogoComponent = frontPage ? FrontPageLogo : Logo;
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

  const HamburgerKnapp = () => {
    return useSkinColoredHamburgerMenu ? (
      <SkinColorHamburgerButton onClick={() => setMenuExpanded(!menuExpanded)}>
        <StyledHamburgerIcon />
      </SkinColorHamburgerButton>
    ) : (
      <GreenColorHamburgerButton onClick={() => setMenuExpanded(!menuExpanded)}>
        <StyledHamburgerIcon />
      </GreenColorHamburgerButton>
    );
  };

  const colorContext = useContext(ColorContext);

  const newColorContext = frontPage
    ? {
      backgroundColor: COLOR_CLAVE_GREEN,
      textColor: COLOR_CLAVE_SKIN,
    }
    : colorContext;

  const WrapperComponent = frontPage
    ? FrontPageWrapper
    : styled(Wrapper)`
        background: ${newColorContext.backgroundColor || COLOR_CLAVE_SKIN};
      `;

  return (
    <ColorContext.Provider value={newColorContext}>
      <header>
        <Container>
          <Container.Content>
            <StyledHeader frontPage={frontPage}>
              <WrapperComponent>
                <Link to="/">
                  <LogoComponent />
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
                <HamburgerKnapp />
              </WrapperComponent>
              <HamburgerMenyOptions />
            </StyledHeader>
          </Container.Content>
        </Container>
      </header>
    </ColorContext.Provider>
  );
};

const PADDING_VERTICAL = '1.45rem';

const LogoInner = styled(ClaveLogo)`
  width: 5rem;
  height: auto;
`;

export const Logo = props => {
  const { textColor } = useContext(ColorContext);
  const ColoredLogo = styled(LogoInner)`
    fill: ${textColor || COLOR_CLAVE_GREEN};
  `;
  return <ColoredLogo {...props} />;
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
  ${props => props.frontPage ? `` : `
    padding: 0 ${MOBILE_PADDING};
    ${onDesktop(`
      padding: 0 ${DESKTOP_PADDING};
    `)}
  `}
`;

const SkinColorHamburgerButton = styled(HamburgerButton)`
  fill: ${COLOR_CLAVE_SKIN};
`;

const GreenColorHamburgerButton = styled(HamburgerButton)`
  fill: ${COLOR_CLAVE_GREEN};
`;

const FrontPageLogo = styled(Logo)`
  fill: ${COLOR_CLAVE_SKIN};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${PADDING_VERTICAL} 0;
`;

const InlineWrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 75%;
`;

const FrontPageWrapper = styled(Wrapper)`
  background: none;
  padding: ${PADDING_VERTICAL} 0;
`;

const StyledHamburgerIcon = styled(hamburgerIcon)`
  width: 2rem;
  height: auto;
`;

export default Header;
