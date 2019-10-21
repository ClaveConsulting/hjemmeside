import React from 'react';
import styled from 'styled-components';

import { COLOR_CLAVE_SKIN } from '../colors';

const PageHeader = ({ title, imageProps }) => {
  return (
    <PageHeaderWrapper>
      <h1>{title}</h1>
      <PageHeaderImage {...imageProps} />
    </PageHeaderWrapper>
  );
};

const PageHeaderWrapper = styled.div`
  background-color: ${COLOR_CLAVE_SKIN};
  text-align: center;
`;

const PageHeaderImage = props => (
  <PageHeaderImageWrapper>
    <PageHeaderImageImg {...props} />
  </PageHeaderImageWrapper>
);

const PageHeaderImageWrapper = styled.div``;
const PageHeaderImageImg = styled.img`
  display: block;
  width: 80%;
  height: auto;
  margin: 0 0 0 auto;
`;

export default PageHeader;