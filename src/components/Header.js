import PropTypes from 'prop-types';
import React from 'react';
import { COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './clave-logo.svg';

const Header = ({ textClassName }) => (
  <header>
    <Wrapper>
      <Logo />
      <HeaderLink to="/hva-vi-gjor" className={textClassName}>
        Se hva vi gjør
      </HeaderLink>
      <HeaderLink to="/bli-en-av-oss" className={textClassName}>
        Bli en av oss
      </HeaderLink>
    </Wrapper>
  </header>
);

const Logo = styled(ClaveLogo)`
  width: 5em;
  height: auto;
`;

const HeaderLink = styled(ClaveLink)`
  display: block;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.45rem 0;
  color: ${COLOR_CLAVE_SKIN};
`;

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
