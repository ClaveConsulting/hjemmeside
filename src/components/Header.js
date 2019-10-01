import PropTypes from 'prop-types';
import React from 'react';
import { COLOR_CLAVE_SKIN } from '../colors';
import styled from 'styled-components';
import ClaveLink from './ClaveLink';

const Header = ({textClassName}) => (
  <header>
    <Wrapper>
      <span className={textClassName}>Clave</span>
      <ClaveLink className={textClassName}>Se hva vi gjør</ClaveLink>
      <ClaveLink className={textClassName}>Bli en av oss</ClaveLink>
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
