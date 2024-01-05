import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from './Layout';
import { onDesktop } from './Breakpoints';

const GalleryImageWithSubtext = ({ image, children, alt }) => {
  const ImageWrapper = styled.img`
    padding-bottom: 60px;
  `;
  return (
    <GalleryImageContainer>
      <ImageWrapper alt={alt} width="833" height="566" src={image}/>
      {children}
    </GalleryImageContainer>
  );
};

const LeftTextWrapper = styled.div`
  width: 95%;
  ${onDesktop(`
    width: 50%;
    position: static;
  `)}
`;
const LeftTextItem = styled.div`
  padding-bottom: 20px;
`;

const RightTextWrapper = styled.div`
  width: 95%;
  ${onDesktop(`
    width: 80%;
    position: static;
  `)}
`;

export const ProjectGallery = ({
  leftImg,
  rightImg,
  methodology,
  technology,
  finalText,
  imageSpacing = 300,
}) => {
  const [firstSectionHeight, setFirstSectionHeight] = useState(0);
  const firstSectionRef = useRef(null);

  useEffect(() => {
    const onResize = _ =>
      setFirstSectionHeight(firstSectionRef.current.clientHeight);
    window.addEventListener('resize', onResize);
    setFirstSectionHeight(firstSectionRef.current.clientHeight);
    return () => window.removeEventListener('resize', onResize);
  }, [firstSectionRef]);

  return (
    <GalleryContainer>
      <FirstImage ref={firstSectionRef} height={firstSectionHeight}>
        <GalleryImageWithSubtext image={leftImg} alt="FirstImage">
          <LeftTextWrapper>
            {methodology ? (
              <LeftTextItem>
                <h2>Metodologi</h2>
                <p>{methodology}</p>
              </LeftTextItem>
            ) : null}
            {technology ? (
              <LeftTextItem>
                <h2>Teknologi</h2>
                <p>{technology}</p>
              </LeftTextItem>
            ) : null}
          </LeftTextWrapper>
        </GalleryImageWithSubtext>
      </FirstImage>
      <SecondImage
        desktopTopMargin={-Math.max(0, firstSectionHeight - imageSpacing)}
      >
        <GalleryImageWithSubtext image={rightImg} alt="SecondImage">
          <RightTextWrapper>
            <p>{finalText}</p>
          </RightTextWrapper>
        </GalleryImageWithSubtext>
      </SecondImage>
    </GalleryContainer>
  );
};

const GalleryContainer = props => {
  const ContainerPadding = styled.div`
    padding-left: 64px;
    position: relative;
    overflow: hidden;
    padding-bottom: 64px;
  `;
  return (
    <Container>
      <ContainerPadding {...props} />
    </Container>
  );
};

styled(Container)`
  margin-left: 64px;
`;

const GalleryImageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const FirstImage = styled.div`
  ${onDesktop(`
  width: 62%;
  position: relative;
  float: left;
  `)}
`;
const SecondImage = ({ children, desktopTopMargin }) => {
  const SectionStyle = styled.div`
    ${onDesktop(`
  width: 60%;
  position: relative;
  float: right;
  margin-top: ${desktopTopMargin}px
  `)}
  `;
  return <SectionStyle>{children}</SectionStyle>;
};
