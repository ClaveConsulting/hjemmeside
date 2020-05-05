import React, { useContext, useState } from 'react';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './icons/clave-logo.svg';
import { Link } from 'gatsby';
import hamburgerIcon from './icons/hamburgermeny_ikon.svg';
import {
  ColorContext,
  Container,
  DESKTOP_PADDING,
  MOBILE_PADDING,
} from './Layout';
import { onDesktop, onMobile } from './Breakpoints';
import HamburgerMenuLink from './HamburgerMenuLink';

const Header = ({
  frontPage = false,
  useSkinColoredHamburgerMenu = false,
  uri,
}) => {
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
    const menuLinks = [
      {
        label: 'Se hva vi gjør',
        to: '/hva-vi-gjor',
      },
      {
        label: 'Se hvem vi er',
        to: '/hvem-vi-er',
      },
      {
        label: 'Kontakt oss',
        to: '/kontakt-oss',
      },
    ];

    return menuExpanded ? (
      <HamburgerDiv>
        {menuLinks.map(({ label, to }) => (
          <HamburgerMenuLink key={label} to={to} active={to === uri}>
            {label}
          </HamburgerMenuLink>
        ))}
      </HamburgerDiv>
    ) : null;
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
        backgroundColor: 'none',
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
                  <LinkComponent to="/hvem-vi-er">Se hvem vi er</LinkComponent>
                  <LinkComponent to="/kontakt-oss">Kontakt oss</LinkComponent>
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

const PADDING_TOP_DESKTOP = '4rem';
const PADDING_BOTTOM_DESKTOP = '6rem';

const PADDING_TOP_MOBILE = '1.5rem';
const PADDING_BOTTOM_MOBILE = '4.75rem';

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
  ${props =>
    props.frontPage
      ? ``
      : `
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

const FrontPageWrapper = styled(Wrapper)`
  background: none;
  ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  padding-bottom: ${PADDING_BOTTOM_DESKTOP};
  `)}
  ${onMobile(`
padding-top: ${PADDING_TOP_MOBILE};
padding-bottom: ${PADDING_BOTTOM_MOBILE};
`)}
`;

const StyledHamburgerIcon = styled(hamburgerIcon)`
  width: 2rem;
  height: auto;
`;

export default Header;
