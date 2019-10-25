import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_CLAVE_GREEN } from '../colors';


const StyledWrapper = styled.h1`
  color: ${props => props.color};
`;
const Title = ({ children, color = COLOR_CLAVE_GREEN, className }) => (
  <StyledWrapper className={className} color={color}>{children}</StyledWrapper>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Title;
