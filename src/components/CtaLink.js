import React from 'react';
import styled from 'styled-components';
import { COLOR_CLAVE_BLUE } from '../colors';
import ClaveLink from './ClaveLink';

const CtaLink = props => (
  <div>
    <Link {...props} />
  </div>
);

export default CtaLink;

const Link = styled(ClaveLink)`
  font-size: 1.4rem;
  color: ${COLOR_CLAVE_BLUE};
`;
