import PropTypes from 'prop-types';
import React from 'react';
import { COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './icons/clave-logo.svg';

const Header = ({ textClassName, frontPage = false }) => {
  const WrapperComponent = frontPage ? FrontPageWrapper : Wrapper;
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
        <Logo />
        <LinkComponent to="/hva-vi-gjor" className={textClassName}>
          Se hva vi gjør
        </LinkComponent>
        <LinkComponent to="/hvem-vi-er" className={textClassName}>
          Se hvem vi er
        </LinkComponent>
        <LinkComponent to="/kontakt-oss" className={textClassName}>
          Kontakt oss
        </LinkComponent>
      </WrapperComponent>
    </header>
  );
};

const PADDING_VERTICAL = '1.45rem';

const Logo = styled(ClaveLogo)`
  width: 5em;
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${PADDING_VERTICAL} 1em;
  background: ${COLOR_CLAVE_SKIN};
`;

const FrontPageWrapper = styled(Wrapper)`
  background: none;
  padding: ${PADDING_VERTICAL} 0;
`;

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
