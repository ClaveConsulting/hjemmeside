import React from 'react';
import styled from 'styled-components';
import { MOBILE_PADDING, Container, ContentColumn } from './Layout';
import { onDesktop, onMobile } from './Breakpoints';
import { Ingress } from './Ingress';



//write file without styled components

//
const PageHeader = ({ title, ingress = undefined, imageProps }) => {
  return (
    <Container>
      <PageHeaderWrapper>
        <PageHeaderContent>
          <PageHeaderTitle>{title}</PageHeaderTitle>
          {ingress ? <Ingress>{ingress}</Ingress> : null}
        </PageHeaderContent>
        <PageHeaderImage {...imageProps} />
      </PageHeaderWrapper>
    </Container>
  );
};

const PageHeaderContent = styled(ContentColumn)`
  padding-bottom: 2rem;
`;

const PageHeaderWrapper = styled(Container.Content)`
  margin: 0 auto;

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
const PageHeaderLoadedImage = styled.img`
  ${imageStyle}
`;
const PageHeaderTitle = styled.h1`
  ${onDesktop(`
    margin-bottom:4rem;
  `)};
  @media only screen and (max-width: 719px) {
    margin-bottom:1.5rem;
}`;

export default PageHeader;
