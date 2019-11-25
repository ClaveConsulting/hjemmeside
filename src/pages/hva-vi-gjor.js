import React, { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import Layout, { MOBILE_PADDING, Container } from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import CtaLink from '../components/CtaLink';
import { Gallery, GalleryImage } from '../components/Gallery';
import ClaveLink from '../components/ClaveLink';
import { useStaticQuery, graphql } from 'gatsby';
import Image from '../components/Image';
import { onDesktop } from '../components/Breakpoints';

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
        <Header />
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
          <Ingress>
            Vi driver med brukeropplevelse, systemutvikling og rådgivning. Vi
            sitter stort sett alltid hos kunden vi jobber for, over tid.
          </Ingress>
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
          <h2>Brukertesting er viktig!</h2>
          <p>
            Steffen og "Irene" er vårt brukervennlighetstest-team. De jobber på
            tvers av de kundene vi har, og for andre som trenger å få
            brukertestet. Vi har laget dette som en egen tjeneste, fordi
            brukervennlighetstesting er jo noe alle trenger å gjøre jevnlig!
          </p>
          <CtaLink to="/brukertesting">Mer om vår brukertesting</CtaLink>
        </Layout>
        <Layout
          asideContent={
            <AsideContent>
              <h3>Bestill en test</h3>
              <p>
                Har du en løsning som du ikke har observert at dine brukere
                benytter seg av? Er det lenge siden du sist
                brukervennlighetstestet løsningen din? Da kan Steffen og Irene
                hjelpe deg.
              </p>
              <CtaLink to="/">Mer om hvordan vi tester</CtaLink>
              <AsideImage
                fluidImage={images.laptop}
                width="387"
                height="279"
                alt="Brukertesting"
              />
            </AsideContent>
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
        <Layout>
          <h2>Sjekk ut hva vi gjør hos kundene våre</h2>
          <p>
            Det er stort sett alltid flere Clavere hos en kunde, og gjerne en
            blanding av UX-designere, rådgivere og utviklere. Spa, post,
            nettbutikk, bil, offentlifg forvaltning, humanitært arbeid. Vi
            jobber innen mange ulike domener!
          </p>
        </Layout>
        <Projects>
          <Project
            image={{
              fluidImage: images.theWell,
              alt: 'Pia',
              width: 305,
              height: 247,
            }}
            title="The Well"
            ingress="Henning og Pia jobber hos Posten i innovasjonsavdeingen. Begge jobber etter metodikk innen Sercice design i team sammen med Posten sine egne ansatte."
            link="/prosjekter/the-well"
          />
          <Project
            image={{
              src: 'https://placehold.it/305x337/000/fff',
              alt: 'Karine',
              width: 305,
              height: 337,
            }}
            title="Toll"
            ingress="Karine og Samson jobber for Rødekors. De skal lage et internt system for..... Da må hun snakke med …. og brukervennlighetsteste hyppig underveis."
            link="/prosjekter/toll"
          />
          <Project
            image={{
              src: 'https://placehold.it/305x239/ff0/fff',
              alt: 'Anniken',
              width: 305,
              height: 239,
            }}
            title="NAF"
            ingress="Anniken og Lars Petter jobber for The Well. The Well er Nordens største spa- og velværesenter. De må faktisk litt på spa av og til, for å forstå brukeren."
            link="/prosjekter/naf"
          />
          <Project
            image={{
              fluidImage: images.komplett,
              alt: 'Anniken',
              width: 305,
              height: 239,
            }}
            title="Komplett"
            ingress="Anniken og Lars Petter jobber for The Well. The Well er Nordens største spa- og velværesenter. De må faktisk litt på spa av og til, for å forstå brukeren."
            link="/prosjekter/komplett"
          />
        </Projects>
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
          })
      ),
    [children]
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
  padding: 0 1em;

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
  margin-bottom: 1em;
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

const AsideContent = styled.div`
  padding-left: ${MOBILE_PADDING};
`;

const AsideImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const Ingress = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
`;

export default SecondPage;
