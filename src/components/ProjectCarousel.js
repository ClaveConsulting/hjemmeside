import React, { useContext, useMemo, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from './Image';
import styled from 'styled-components';
import { Container } from '../components/Layout';
import { onDesktop } from '../components/Breakpoints';
import ClaveLink from '../components/ClaveLink';
import { COLOR_CLAVE_GREEN } from '../colors';

const ProjectItem = styled.li`
  flex: 1 0 auto;
  padding: 0 1rem;
  margin: 0px 10px 0px 10px;

  ${onDesktop(`
    flex: 0 0 auto;
  `)}
`;

const projectImageStyle = `
  display: block;
  width: 100%;
  height: auto;
  margin-top: auto;
`;

const ProjectImg = styled.img`
  ${projectImageStyle}
`;

const ProjectFluidImage = styled(Image)`
  ${projectImageStyle}
`;

const ProjectImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const NavigateRight = styled.div`
  right: 0;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 20px solid ${COLOR_CLAVE_GREEN};
`;

const NavigateLeft = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 20px solid ${COLOR_CLAVE_GREEN};
`;

const CustomRightArrow = ({ onClick }) => (
  <NavigateRight onClick={() => onClick()} />
);
const CustomLeftArrow = ({ onClick }) => (
  <NavigateLeft onClick={() => onClick()} />
);

const ProjectCarousel = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 720 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={false}
      showDots={false}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {children}
    </Carousel>
  );
};

const ProjectsListContext = React.createContext({ maxHeight: 0 });

export const Projects = ({ children }) => {
  const aspectRatio = useMemo(
    () =>
      Math.min.apply(
        null,
        children
          .map(child => child.props.image)
          .map(image => {
            if (image.fluidImage)
              return image.fluidImage.childImageSharp.fluid.aspectRatio;

            return image.width / image.height;
          })
      ),
    [children]
  );

  return (
    <ProjectsListContext.Provider value={{ aspectRatio }}>
      <Container.Content>
        <ProjectCarousel>{children}</ProjectCarousel>
      </Container.Content>
    </ProjectsListContext.Provider>
  );
};

export const Project = ({
  image: { src, fluidImage, alt, width, height },
  title,
  ingress,
  link,
}) => {
  const { aspectRatio } = useContext(ProjectsListContext);

  const [imgWrapperHeight, setImgWrapperHeight] = useState(null);

  const ImageComponent = fluidImage ? ProjectFluidImage : ProjectImg;

  return (
    <ProjectItem style={{ flexBasis: `${width}px` }}>
      <ProjectImgWrapper
        ref={div => {
          if (!div) return;

          setImgWrapperHeight(`${div.offsetWidth / aspectRatio}px`);
        }}
        style={{ height: imgWrapperHeight }}
      >
        <ImageComponent
          fluidImage={fluidImage}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </ProjectImgWrapper>
      <h3>{title}</h3>
      <p>{ingress}</p>
      {link ? (
        <ClaveLink to={link} showOnMobile>
          Mer om {title}
        </ClaveLink>
      ) : null}
    </ProjectItem>
  );
};
