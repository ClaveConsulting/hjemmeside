import React, { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import Layout, { Container } from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import CtaLink from '../components/CtaLink';
import { Gallery, GalleryImage } from '../components/Gallery';
import ClaveLink from '../components/ClaveLink';
import { graphql, useStaticQuery } from 'gatsby';
import Image from '../components/Image';
import { onDesktop } from '../components/Breakpoints';
import Header2 from '../components/Header2';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';

const SecondPage = () => {
  const images = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "190920_Clave_lowres_2.jpg" }) {
        ...fluidImage
      }
      larsPetter: file(relativePath: { eq: "190920_Clave_lowres_14.jpg" }) {
        ...fluidImage
      }
      pointing: file(relativePath: { eq: "190920_Clave_lowres_9.jpg" }) {
        ...fluidImage
      }
      laptop: file(relativePath: { eq: "190920_Clave_lowres_16.jpg" }) {
        ...fluidImage
      }
      komplett: file(relativePath: { eq: "190920_Clave_lowres_8.jpg" }) {
        ...fluidImage
      }
      theWell: file(relativePath: { eq: "190920_Clave_lowres_15.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <>
      <main>
        <Header2 backgroundColor={COLOR_CLAVE_SKIN} textColor={COLOR_CLAVE_GREEN}/>
        <SEO title="Se hva vi gjør" description="" />
        <PageHeader
          title="Se hva vi gjør"
          imageProps={{
            fluidImage: images.header,
            width: 1227,
            height: 728,
          }}
        />
        <Layout>
          <h2>
            Vi driver med brukeropplevelse, systemutvikling og rådgivning. Vi
            sitter stort sett alltid hos kunden vi jobber for, over tid.
          </h2>
          <p>
            Noen prosjekter gjør vi sammen med utviklere og testere fra Fabres i
            Polen. Vi i Clave har nemlig vært med å starte konsulentselskapet
            Fabres som er lokalisert i Polen. De samarbeider vi med på flere
            prosjekter.
          </p>
          <p>
            Når vi jobber med de, møtes vi selvfølgelig av og til, men har også
            utviklet et skikkelig godt forhold ved å se og snakke med hverandre
            via video hver dag. Ved å jobbe i tverrfaglige team, på tvers av
            landegrensene, har vi lært hva som er viktigst for at samarbeidet
            skal fungere aller best.
          </p>
          <h3>Brukertesting er viktig!</h3>
          <p>
            Steffen og Anniken er vårt brukervennlighetstest-team. De jobber på
            tvers av de kundene vi har, og for andre som trenger å få
            brukertestet. Vi har laget dette som en egen tjeneste, fordi
            brukervennlighetstesting er jo noe alle trenger å gjøre jevnlig!
          </p>
          <CtaLink to="/kontakt-oss">Kontakt oss for mer info</CtaLink>
        </Layout>
        <Layout
          asideContent={
            <div>
              <h3>Bestill en test</h3>
              <p>
                Har du en løsning som du ikke har observert at dine brukere
                benytter seg av? Er det lenge siden du sist
                brukervennlighetstestet løsningen din? Da kan Steffen og Anniken
                hjelpe deg.
              </p>
              <AsideImage
                fluidImage={images.laptop}
                width="387"
                height="279"
                alt="Brukertesting"
              />
            </div>
          }
        >
          <Gallery>
            <GalleryImage
              fluidImage={images.larsPetter}
              width="681"
              height="470"
              alt="Lars-Petter og Yngve"
            />
            <GalleryImage
              fluidImage={images.pointing}
              width="306"
              height="368"
              alt="Pekefinger"
            />
          </Gallery>
        </Layout>
      </main>
      <Footer />
    </>
  );
};

const ProjectsListContext = React.createContext({ maxHeight: 0 });

const Projects = ({ children }) => {
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
          }),
      ),
    [children],
  );

  return (
    <ProjectsListContext.Provider value={{ aspectRatio }}>
      <ProjectsListContainer>
        <Container.Content>
          <ProjectsList>{children}</ProjectsList>
        </Container.Content>
      </ProjectsListContainer>
    </ProjectsListContext.Provider>
  );
};

const ProjectsListContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const ProjectsList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0 auto;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ProjectItem = styled.li`
  flex: 1 0 auto;
  padding: 0 1rem;

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

const Project = ({
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
      <ClaveLink to={link}>Mer om {title}</ClaveLink>
    </ProjectItem>
  );
};

const AsideImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const Ingress = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
`;

export default SecondPage;
