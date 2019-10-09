import PropTypes from 'prop-types';
import React from 'react';
import { COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';
import ClaveLogo from './clave-logo.svg';

const Header = ({textClassName}) => (
  <header>
    <Wrapper>
      <ClaveLogo width="5rem" />
      <ClaveLink to="/hva-vi-gjor" className={textClassName}>Se hva vi gjør</ClaveLink>
      <ClaveLink to="/bli-en-av-oss" className={textClassName}>Bli en av oss</ClaveLink>
    </Wrapper>
  </header>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.45rem 1.0875rem;
  color: ${COLOR_CLAVE_SKIN};
`;

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
