import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import { onDesktop } from './Breakpoints';

export const Gallery = ({ children, ...props }) => (
  <Container>
    <Content {...props}>
      {
        children.reduce(
          ({ kids, prev }, child) => {
            const width = parseFloat(child.props.width);
            return {
              kids: [
                ...kids,
                React.cloneElement(child, {
                  key: child.props.src || child.props.alt,
                  ...child.props,
                  style: {
                    ...child.props.style,
                    width: prev ? `${((100 * width) / prev) * 1.2}%` : null,
                  },
                }),
              ],
              prev: width,
            };
          },
          { kids: [] },
        ).kids
      }
    </Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1 1 auto;
  margin-top: 1rem;
  position: relative;
  left: 1rem;

  ${onDesktop(`
    width: 100%;
    position: static;
  `)}
`;

const galleryImgStyles = `
    display: block;
    margin: 0;
    width: 100%;
    height: auto;

    &:nth-child(2) {
        margin-right: 11%;
        margin-left: auto;
        margin-top: -20%;
    }
`;

const GalleryImageImg = styled.img`
  ${galleryImgStyles}
`;

const LoadedGalleryImage = styled(Image)`
  ${galleryImgStyles}
`;

export const GalleryImage = ({ fluidImage, src, ...props }) =>
  fluidImage ? (
    <LoadedGalleryImage fluidImage={fluidImage} {...props} />
  ) : (
    <GalleryImageImg src={src} {...props} />
  );
