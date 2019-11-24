import React from 'react';
import styled from 'styled-components';

import { Container, MOBILE_PADDING, onDesktop } from './Layout';
import Image from './Image';

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

const PageHeaderImage = ({ fluidImage, src, ...props }) => (
  <PageHeaderImageWrapper>
    {fluidImage ? (
      <PageHeaderLoadedImage fluidImage={fluidImage} {...props} />
    ) : (
      <PageHeaderImageImg src={src} {...props} />
    )}
  </PageHeaderImageWrapper>
);

const PageHeaderImageWrapper = styled.div``;

const imageStyle = `
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  
  ${onDesktop(`
    width: 80%;
    margin-left: auto;
  `)}
`;

const PageHeaderImageImg = styled.img`
  ${imageStyle}
`;
const PageHeaderLoadedImage = styled(Image)`
  ${imageStyle}
`;

export default PageHeader;
