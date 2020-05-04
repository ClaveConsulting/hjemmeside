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
import ClaveProjects from './../components/ClaveProjects';

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
      naf: file(relativePath: { eq: "190920_Clave_lowres_13.jpg" }) {
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
          <h2>
            Vi driver med brukeropplevelse, systemutvikling og rådgivning. Vi
            sitter stort sett alltid hos kunden vi jobber for, over tid.
          </h2>
          <p>
            Med våre dyktige prosjektledere, utviklere og designere når vi nye
            høyder sammen. Våre tverrfaglige team samarbeider om å lage
            intuitive løsninger hvor brukeren står i fokus. Fornøyde brukere gir
            fornøyde kunder.
          </p>
          <p>
            Vi er stolte over fagområdene våre, og er alltid opptatt av å være
            oppdatert på det siste innenfor metodikker og systemer.
          </p>
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
        </Layout>
        <Layout
          asideContent={
            <div>
              <h3>Brukertesting er viktig!</h3>
              <p>
                Steffen og Anniken er vårt brukervennlighetstest-team. De jobber
                på tvers av de kundene vi har, og for andre som trenger å få
                brukertestet. Vi har laget dette som en egen tjeneste, fordi
                brukervennlighetstesting er jo noe alle trenger å gjøre jevnlig!
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
        <Layout>
          <h2>Sjekk ut hva vi gjør hos kundene våre</h2>
          <p>
            Det er stort sett alltid flere Clavere hos en kunde, og gjerne en
            blanding av UX-designere, rådgivere og utviklere. Spa, post,
            nettbutikk, bil, offentlig forvaltning og humanitært arbeid. Vi
            jobber innen mange ulike domener!
          </p>
        </Layout>
        <Layout asideContent={
        <ClaveProjects />}>
        <Gallery>
            <GalleryImage
              fluidImage={images.komplett}
              width="681"
              height="470"
              alt="Lars-Petter og Yngve"
            />
            <GalleryImage
              fluidImage={images.naf}
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

const AsideImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

export default SecondPage;
