import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN} from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './icons/clave-logo.svg';
import {Link} from 'gatsby';
import hamburgerIcon from './icons/hamburgermeny_ikon.svg';

const Header = ({textClassName, frontPage = false, greenHeader = false}) => {

  const [menuExpanded, setMenuExpanded] = useState(false);
  const WrapperComponent = frontPage ? FrontPageWrapper : greenHeader ? kontaktOssWrapper : Wrapper;
    const LogoComponent = frontPage || greenHeader ? FrontPageLogo : Logo;
    const LinkComponent = styled(ClaveLink)`
    ${frontPage || greenHeader ? `color: ${COLOR_CLAVE_SKIN};` : ''}
    display: block;
    margin-left: 0.5em;
    margin-right: 0.5em;
    @media only screen and (max-width: 600px) {
      display: none;
  }
  `;

  const HanburgerMenuLink = styled(ClaveLink)`
    ${frontPage || greenHeader? `color: ${COLOR_CLAVE_SKIN};` : ''}
    display: block;
    margin-left: 0.5em;
    margin-right: 0.5em;
  `;

  const HamburgerMenyOptions = ({ textClassName }) => {
    return menuExpanded ? (
      <div>
        <HanburgerMenuLink to="/hva-vi-gjor" className={textClassName}>
          Se hva vi gjør
        </HanburgerMenuLink>
        <HanburgerMenuLink to="/hvem-vi-er" className={textClassName}>
          Se hvem vi er
        </HanburgerMenuLink>
        <HanburgerMenuLink to="/kontakt-oss" className={textClassName}>
          Kontakt oss
        </HanburgerMenuLink>
      </div>
    ) : '';
  };

  const HamburgerKnapp = () => {
    return frontPage || greenHeader ? (<SkinColorHamburgerButton onClick={() => setMenuExpanded(!menuExpanded)}>
      <StyledHamburgerIcon/>
    </SkinColorHamburgerButton>):(<GreenColorHamburgerButton onClick={() => setMenuExpanded(!menuExpanded)}>
      <StyledHamburgerIcon/>
    </GreenColorHamburgerButton>)

  };

  return (
    <header>
      <WrapperComponent>
        <LogoWrapper>
          <Link
            to="/"
          >
            <LogoComponent/>
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
        <HamburgerKnapp/>
      </WrapperComponent>

      <HamburgerMenyOptions className={textClassName}/>
        </header>
    );
};

const PADDING_VERTICAL = '1.45rem';

const Logo = styled(ClaveLogo)`
  width: 5em;
  height: auto;
  fill: ${COLOR_CLAVE_GREEN};
`;

const HamburgerButton = styled.button`

	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

      @media only screen and (min-width: 600px) {
      display: none;
  }

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
  padding: ${PADDING_VERTICAL} 1em;
  background: ${COLOR_CLAVE_SKIN};
`;

const InlineWrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 75%;
      @media only screen and (min-width: 600px) {
      margin-right: 4rem;
  }
`;

const LogoWrapper = styled.div`
      @media only screen and (min-width: 600px) {
      margin-left: 4rem;
  }
`;

const FrontPageWrapper = styled(Wrapper)`
  background: none;
  padding: ${PADDING_VERTICAL} 0;
`;

const kontaktOssWrapper = styled(Wrapper)`
  background: ${COLOR_CLAVE_GREEN};
`;

Header.propTypes = {
    children: PropTypes.string,
};

const StyledHamburgerIcon = styled(hamburgerIcon)`
  width: 2em;
  height: auto;
  
`;

export default Header;
