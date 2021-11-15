import React from 'react';
import styled from 'styled-components';
import { MOBILE_PADDING, Container } from './Layout';
import Image from './Image';
import { onDesktop, onMobile } from './Breakpoints';

const PageHeader = ({ title, imageProps }) => {
  return (
    <Container>
      <PageHeaderWrapper>
        <PageHeaderTitle>{title}</PageHeaderTitle>
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
    margin-bottom: 
  `)}
`;

const PageHeaderImage = ({ fluidImage, src, ...props }) => (
  <div>
    {fluidImage ? (
      <PageHeaderLoadedImage fluidImage={fluidImage} {...props} />
    ) : (
      <PageHeaderImageImg src={src} {...props} />
    )}
  </div>
);

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
const PageHeaderTitle = styled.h1`
    ${onDesktop(`
    margin-bottom:4rem;
  `)}
  ${onMobile(`
    margin-bottom:1.5rem;
  `)}
`;

export default PageHeader;
