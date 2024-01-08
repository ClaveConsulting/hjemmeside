import React, { useContext, useState } from 'react';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from '../colors';
import styled, { css } from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './icons/clave-logo.svg';
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
  frontPage,
  useSkinColoredHamburgerMenu,
  uri,
  textColor = COLOR_CLAVE_PEACH,
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

    &:hover {
      -webkit-text-stroke-width: 1px;
    }
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

  const HamburgerButton = () => {
    const ButtonComponent = useSkinColoredHamburgerMenu
      ? SkinColorHamburgerButton
      : GreenColorHamburgerButton;
    return (
      <ButtonComponent
        aria-label="Meny"
        onClick={() => setMenuExpanded(!menuExpanded)}
      >
        <StyledHamburgerIcon />
      </ButtonComponent>
    );
  };

  const colorContext = useContext(ColorContext);

  const newColorContext = frontPage
    ? {
        backgroundColor: 'none',
        textColor: textColor,
      }
    : colorContext;

  const WrapperComponent = styled(Wrapper)`
    background: ${newColorContext.backgroundColor || COLOR_CLAVE_PEACH};
  `;

  return (
    <ColorContext.Provider value={newColorContext}>
      <header>
        <Container>
          <Container.Content>
            <StyledHeader frontPage={frontPage}>
              <WrapperComponent>
                <link aria-label="Forsiden til Clave.no" to="/">
                  <Logo />
                </link>
                <InlineWrapper>
                  <LinkComponent to="/hva-vi-gjor">
                    Se hva vi gjør
                  </LinkComponent>
                  <LinkComponent to="/hvem-vi-er">Se hvem vi er</LinkComponent>
                  <LinkComponent to="/kontakt-oss">Kontakt oss</LinkComponent>
                </InlineWrapper>
                <HamburgerButton />
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
const PADDING_TOP_MOBILE = '1.5rem';

export const Logo = (props) => {
  const { textColor } = useContext(ColorContext);
  const LogoInner = styled(ClaveLogo)`
    width: ${props.width || '5rem'};
    height: auto;
  `;
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

const StyledHeader = styled.header(
  (props) => css`
    padding: 0 ${MOBILE_PADDING};
    ${onDesktop(`
      padding: 0 ${DESKTOP_PADDING};
    `)}
  `
);

const SkinColorHamburgerButton = styled(HamburgerButton)`
  fill: ${COLOR_CLAVE_PEACH};
`;

const GreenColorHamburgerButton = styled(HamburgerButton)`
  fill: ${COLOR_CLAVE_GREEN};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  `)}
  ${onMobile(`
  padding-top: ${PADDING_TOP_MOBILE};
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

export default Header;
