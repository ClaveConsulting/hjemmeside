import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import { Gallery, GalleryImage } from '../components/Gallery';
import { graphql, useStaticQuery } from 'gatsby';
import Image from '../components/Image';
import { onDesktop, onMobile } from '../components/Breakpoints';
import { COLOR_CLAVE_PEACH } from '../colors';
import { Projects } from '../components/ProjectList';

const PADDING_TOP_DESKTOP = '6rem';
const PADDING_TOP_MOBILE = '4.75rem';

const SecondPage = props => {
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
      naf: file(relativePath: { eq: "190920_Clave_lowres_13.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <>
      <main>
        <Header {...props} />
        <SEO title="Se hva vi gjør" description="" />
        <TitleWrapper>
          <PageHeader
            title="Se hva vi gjør"
            imageProps={{
              fluidImage: images.header,
              width: 1227,
              height: 728,
            }}
          />
        </TitleWrapper>
        <Layout>
          <h2>
            Brukeropplevelse, systemutvikling og rådgivning er spesialiteten
            vår. Vi er stolte av jobbene vi gjør og enda stoltere av relasjonene
            vi bygger med kundene våre.
          </h2>
          <p>
            Vi lager løsninger for menneskene som skal bruke dem. Brukeren står
            derfor alltid i fokus når våre tverrfaglige team samarbeider om å
            lage intuitive løsninger. Fornøyde brukere gir fornøyde kunder.
          </p>
          <p>
            Vi er stolte av fagområdene våre, og er alltid opptatt av å være
            oppdatert på det siste innenfor metode, system og teknologi. Vi er
            skikkelig gode på å samarbeide tett med kundene våre og vi tror det
            er noe av det som gjør at vi lykkes.
          </p>
          <p>
            For å forstå menneskene som skal bruke løsningene vi lager må vi
            skaffe oss innsikt og det gjør vi ved hjelp av både kvalitative og
            kvantitative metoder. Vi gjennomfører alt fra behovskartlegging,
            brukertester, dybdeintervjuer og større tjenestedesignprosjekter.
            Kunnskap gir oss både mulighet til å skape noe nytt og til å
            forbedre det som allerede eksisterer.
          </p>
          <p>
            Vi benytter alltid moderne teknologi når vi ut utvikler løsninger.
            Vår spisskompetanse ligger innen komplekse web-løsninger som er tett
            integrert med økosystemet til kunden. Samlet har våre utviklere
            kompetanse på alt fra frontend med f.eks. React, til Java og .NET på
            backend.
          </p>
          <p>
            Vi i Clave har vært med å starte konsulentselskapet Fabres som er
            lokalisert i Polen. Noen prosjekter gjør vi derfor sammen med
            utviklere og testere derfra.
          </p>
        </Layout>
        <Layout
          asideContent={
            <UserTestingBlock>
              <h4>Brukertesting er viktig!</h4>
              <UserTestingText>
                Steffen og Anniken er vårt brukervennlighetstest-team. De jobber
                på tvers av de kundene vi har, og for andre som trenger å få
                brukertestet. Vi har laget dette som en egen tjeneste, fordi
                brukervennlighetstesting er jo noe alle trenger å gjøre jevnlig!
              </UserTestingText>
              <AsideImage
                fluidImage={images.laptop}
                width="387"
                height="279"
                alt="Brukertesting"
              />
            </UserTestingBlock>
          }
        >
          <Projects />
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

const TitleWrapper = styled.div`
  background-color: ${COLOR_CLAVE_PEACH};
  ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  
  `)}
  ${onMobile(`
  padding-top: ${PADDING_TOP_MOBILE};
  `)}
`;

const AsideImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const UserTestingBlock = styled.div`
  margin-top: 150px;
  ${onMobile(`
    margin-top: 0;
  `)}
`

const UserTestingText = styled.p`
  font-size: 18px;
  line-height: 23.4px;
`


export default SecondPage;
