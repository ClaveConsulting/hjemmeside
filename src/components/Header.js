import PropTypes from 'prop-types';
import React from 'react';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './icons/clave-logo.svg';
import { Link } from 'gatsby';

const Header = ({ textClassName, frontPage = false }) => {
  const WrapperComponent = frontPage ? FrontPageWrapper : Wrapper;
  const LogoComponent = frontPage ? FrontPageLogo : Logo;
  const LinkComponent = styled(ClaveLink)`
    ${frontPage ? `color: ${COLOR_CLAVE_SKIN};` : ''}
    display: block;
    margin-left: 0.5em;
    margin-right: 0.5em;
    @media only screen and (max-width: 600px) {
      display: none;
  }
  `;
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
      </WrapperComponent>
    </header>
  );
};

const PADDING_VERTICAL = '1.45rem';

const Logo = styled(ClaveLogo)`
  width: 5em;
  height: auto;
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

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
