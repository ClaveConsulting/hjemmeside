import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './icons/clave-logo.svg';
import { Link } from 'gatsby';
import hamburgerIcon from './icons/hamburgermeny_ikon.svg';
import { ColorContext, Container, DESKTOP_PADDING, MOBILE_PADDING } from './Layout';
import { onDesktop } from './Breakpoints';

const Header = ({ textClassName, frontPage = false }) => {
  const HamburgerDiv = styled.div``;
  const [menuExpanded, setMenuExpanded] = useState(false);
  const LogoComponent = frontPage ? FrontPageLogo : Logo;
  const LinkComponent = styled(ClaveLink)`
    display: none;
    margin-left: 0.5em;
    margin-right: 0.5em;

    ${onDesktop(`
      display: block;
    `)}
  `;

  const HanburgerMenuLink = styled(ClaveLink)`
    display: block;
    margin-left: 0.5em;
    margin-right: 0.5em;
    ${onDesktop(`
      display: none;
    `)}
  `;

  const HamburgerMenyOptions = ({ textClassName }) => {
    return menuExpanded ? (
      <HamburgerDiv>
        <HanburgerMenuLink to="/hva-vi-gjor" className={textClassName}>
          Se hva vi gjør
        </HanburgerMenuLink>
        <HanburgerMenuLink to="/hvem-vi-er" className={textClassName}>
          Se hvem vi er
        </HanburgerMenuLink>
        <HanburgerMenuLink to="/kontakt-oss" className={textClassName}>
          Kontakt oss
        </HanburgerMenuLink>
      </HamburgerDiv>
    ) : (
      ''
    );
  };

  const HamburgerKnapp = () => {
    return frontPage ? (
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
            <WrapperComponent>
              <LogoWrapper>
                <Link to="/">
                  <LogoComponent />
                </Link>
              </LogoWrapper>
              <InlineWrapper>
                <LinkComponent to="/hva-vi-gjor" className={textClassName}>
                  Se hva vi gjør
                </LinkComponent>
                <LinkComponent to="/hvem-vi-er" className={textClassName}>
                  Se hvem vi er
                </LinkComponent>
                <LinkComponent to="/kontakt-oss" className={textClassName}>
                  Kontakt oss
                </LinkComponent>
              </InlineWrapper>
              <HamburgerKnapp />
            </WrapperComponent>

            <HamburgerMenyOptions className={textClassName} />
          </Container.Content>
        </Container>
      </header>
    </ColorContext.Provider>
  );
};

const PADDING_VERTICAL = '1.45rem';

const LogoInner = styled(ClaveLogo)`
  width: 5em;
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

  ${onDesktop(`
    margin-right: 4rem;
  `)}
`;

export const LogoWrapper = styled.div`
  padding-left: ${MOBILE_PADDING};
  ${onDesktop(`
    padding-left: ${DESKTOP_PADDING};
  `)}
`;

const FrontPageWrapper = styled(Wrapper)`
  background: none;
  padding: ${PADDING_VERTICAL} 0;
`;

Header.propTypes = {
  children: PropTypes.string,
};

const StyledHamburgerIcon = styled(hamburgerIcon)`
  width: 2em;
  height: auto;
`;

export default Header;
