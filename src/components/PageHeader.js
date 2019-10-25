import React from 'react';
import styled from 'styled-components';

import { onDesktop, MOBILE_PADDING, Container } from './Layout';

const PageHeader = ({ title, imageProps }) => {
  return (
    <Container>
      <PageHeaderWrapper>
        <h1>{title}</h1>
        <PageHeaderImage {...imageProps} />
      </PageHeaderWrapper>
    </Container>
  );
};

const PageHeaderWrapper = styled(Container.Content)`
  margin: 0 auto;

  ${onDesktop(`
    text-align: center;
  `)}

  padding: 0 0 0 ${MOBILE_PADDING};

  ${onDesktop(`
    padding-left: 0;
  `)}
`;

const PageHeaderImage = props => (
  <PageHeaderImageWrapper>
    <PageHeaderImageImg {...props} />
  </PageHeaderImageWrapper>
);

const PageHeaderImageWrapper = styled.div``;

const PageHeaderImageImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;

  ${onDesktop(`
    width: 80%;
    margin-left: auto;
  `)}
`;

export default PageHeader;
