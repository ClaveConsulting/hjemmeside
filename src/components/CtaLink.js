import React from 'react';
import styled from 'styled-components';
import { COLOR_CLAVE_BLAA } from '../colors';
import ClaveLink from './ClaveLink';

const CtaLink = props => (
  <Wrapper>
    <Link {...props} />
  </Wrapper>
);

export default CtaLink;

const Wrapper = styled.p``;
const Link = styled(ClaveLink)`
  font-size: 1.4em;
  color: ${COLOR_CLAVE_BLAA};
`;
