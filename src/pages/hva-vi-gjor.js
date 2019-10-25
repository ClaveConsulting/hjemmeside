import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Layout, { MOBILE_PADDING, Container } from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import CtaLink from '../components/CtaLink';
import { GalleryImage, Gallery } from '../components/Gallery';
import { COLOR_CLAVE_SKIN } from '../colors';
import ClaveLink from '../components/ClaveLink';

const SecondPage = () => (
  <main>
    <Header />
    <SEO title="Se hva vi gjør" description="" />
    <PageHeader
      title="Se hva vi gjør"
      imageProps={{
        src: 'https://placehold.it/1227x728/000/fff',
        width: 1227,
        height: 728,
      }}
    />
    <Layout>
      <Ingress>
        Vi driver med brukeropplevelse, systemutvikling og rådgivning. Vi sitter
        stort sett alltid hos kunden vi jobber for, over tid.
      </Ingress>
      <p>
        Noen prosjekter gjør vi sammen med utviklere og testere fra Fabres i
        Polen. Vi i Clave har nemlig vært med å starte konsulentselskapet Fabres
        som er lokalisert i Polen. De samarbeider vi med på flere prosjekter.
      </p>
      <p>
        Når vi jobber med de, møtes vi selvfølgelig av og til, men har også
        utviklet et skikkelig godt forhold ved å se og snakke med hverandre via
        video hver dag. Ved å jobbe i tverrfaglige team, på tvers av
        landegrensene, har vi lært hva som er viktigst for at samarbeidet skal
        fungere aller best.
      </p>
      <h2>Brukertesting er viktig!</h2>
      <p>
        Steffen og "Irene" er vårt brukervennlighetstest-team. De jobber på
        tvers av de kundene vi har, og for andre som trenger å få brukertestet.
        Vi har laget dette som en egen tjeneste, fordi brukervennlighetstesting
        er jo noe alle trenger å gjøre jevnlig!
      </p>
      <CtaLink to="/brukertesting">Mer om vår brukertesting</CtaLink>
    </Layout>
    <Layout
      asideContent={
        <AsideContent>
          <h3>Bestill en test</h3>
          <p>
            Har du en løsning som du ikke har observert at dine brukere benytter
            seg av? Er det lenge siden du sist brukervennlighetstestet løsningen
            din? Da kan Steffen og Irene hjelpe deg.
          </p>
          <CtaLink to="/">Mer om hvordan vi tester</CtaLink>
          <AsideImg
            src="https://placehold.it/387x279/f00000/fff"
            width="387"
            height="279"
            alt="Brukertesting"
          />
        </AsideContent>
      }
    >
      <Gallery>
        <GalleryImage
          src="https://placehold.it/681x470/00f000/fff"
          width="681"
          height="470"
          alt="Lars-Petter og Yngve"
        />
        <GalleryImage
          src="https://placehold.it/306x368/0000f0/fff"
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
        blanding av UX-designere, rådgivere og utviklere. Spa, post, nettbutikk,
        bil, offentlifg forvaltning, humanitært arbeid. Vi jobber innen mange
        ulike domener!
      </p>
    </Layout>
    <Projects>
      <Project
        image={{
          src: 'https://placehold.it/305x247/f00/fff',
          alt: 'Pia',
          width: 305,
          height: 247,
        }}
        title="Posten"
        ingress="Henning og Pia jobber hos Posten i innovasjonsavdeingen. Begge jobber etter metodikk innen Sercice design i team sammen med Posten sine egne ansatte."
        link="/prosjekter/posten"
      />
      <Project
        image={{
          src: 'https://placehold.it/305x337/000/fff',
          alt: 'Karine',
          width: 305,
          height: 337,
        }}
        title="Røde Kors"
        ingress="Karine og Samson jobber for Rødekors. De skal lage et internt system for..... Da må hun snakke med …. og brukervennlighetsteste hyppig underveis."
        link="/prosjekter/rode-kors"
      />
      <Project
        image={{
          src: 'https://placehold.it/305x239/ff0/fff',
          alt: 'Anniken',
          width: 305,
          height: 239,
        }}
        title="The Well"
        ingress="Anniken og Lars Petter jobber for The Well. The Well er Nordens største spa- og velværesenter. De må faktisk litt på spa av og til, for å forstå brukeren."
        link="/prosjekter/the-well"
      />
    </Projects>
  </main>
);

const ProjectsListContext = React.createContext({ maxHeight: 0 });

const Projects = ({ children }) => {
  const maxImageHeight = React.useMemo(
    () =>
      Math.max.apply(
        null,
        children
          .map(child => child.props.image)
          .filter(image => image.height)
          .map(image => parseFloat(image.height))
      ),
    [children]
  );

  return (
    <ProjectsListContext.Provider value={{ maxImageHeight }}>
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
  flex: 0 0 auto;
  padding: 0 1em;
`;

const ProjectImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-top: auto;
`;

const ProjectImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1em;
`;

const Project = ({
  image: { src, alt, width, height },
  title,
  ingress,
  link,
}) => {
  const { maxImageHeight } = useContext(ProjectsListContext);

  const [imgWrapperHeight, setImgWrapperHeight] = useState(null);

  console.log('imgWrapperHeight', imgWrapperHeight);

  return (
    <ProjectItem style={{ flexBasis: `${width}px` }}>
      <ProjectImgWrapper
        ref={div => {
          if (!div) return;

          setImgWrapperHeight(
            `${(maxImageHeight * (div ? div.offsetWidth : width)) / width}px`
          );
        }}
        style={{ height: imgWrapperHeight }}
      >
        <ProjectImg src={src} alt={alt} width={width} height={height} />
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

const AsideImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Ingress = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
`;

export default SecondPage;
