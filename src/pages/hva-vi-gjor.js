import React from 'react';
import styled from 'styled-components';

import Layout, { Container } from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import { Gallery, GalleryImage } from '../components/Gallery';
import { graphql, useStaticQuery } from 'gatsby';
import Image from '../components/Image';
import { Project, Projects } from './../components/ProjectCarousel';

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
        <Container>
          <ClaveProjectCarousel />
        </Container>
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

const ClaveProjectCarousel = () => {
  const images = useStaticQuery(graphql`
    query {
      komplett: file(relativePath: { eq: "190920_Clave_lowres_8.jpg" }) {
        ...fluidImage
      }
      rodekors: file(relativePath: { eq: "190920_Clave_lowres_5_crop.jpg" }) {
        ...fluidImage
      }
      posten: file(relativePath: { eq: "190920_Clave_lowres_7_crop.jpg" }) {
        ...fluidImage
      }
      thewell: file(relativePath: { eq: "190920_Clave_lowres_12_crop.jpg" }) {
        ...fluidImage
      }
      toll: file(relativePath: { eq: "190920_Clave_lowres_3_crop.jpg" }) {
        ...fluidImage
      }
      naf: file(relativePath: { eq: "190920_Clave_lowres_13.jpg" }) {
        ...fluidImage
      }
      eika: file(relativePath: { eq: "190920_Clave_lowres_1_crop.jpg" }) {
        ...fluidImage
      }
    }
  `);
  return (
    <Projects>
      <Project
        image={{ fluidImage: images.posten, alt: 'Pia' }}
        title="Posten"
        ingress="Henning og Pia jobber hos Posten i innovasjonsavdeingen. Begge jobber etter metodikk innen Service design i team sammen med Posten sine egne ansatte. Her kartlegger de kundereiser og finner painponts knyttet til levering og netthandel."
        link="/prosjekter/posten"
      />
      <Project
        image={{ fluidImage: images.rodekors, alt: 'Karine' }}
        title="Røde Kors"
        ingress="Karine og Samson jobber for Røde Kors sammen med utviklere fra Fabres i Polen. De lager et varslings- og overvåkingssystem, slik at frivillige rundt i verden kan varsle om sykdomstilfeller i sine lokalsamfunn, og på den måten oppdage og stoppe sykdomsutbrudd og epidemier."
        link="/prosjekter/rode-kors"
      />
      <Project
        image={{ fluidImage: images.thewell, alt: 'Anniken' }}
        title="The Well"
        ingress="Anniken og Lars Petter jobber sammen med Miron fra Fabres, med bestillings- og betalingsløsning på nettsidene til The Well. The Well er Nordens største spa- og velværesenter. De må faktisk litt på spa av og til, for å forstå brukeren. Viktigst for brukeropplevelsen er nok likevel de jevnlige brukertestene de kjører."
        link="/prosjekter/the-well"
      />
      <Project
        image={{ fluidImage: images.toll, alt: 'Samson og Morten' }}
        title="Toll"
        ingress="Kim, Eirik, Christian, Øyvind og Bent jobber på ulike prosjekter med... (Her mangler vi tekst)"
      />
      <Project
        image={{ fluidImage: images.naf, alt: 'Yngve' }}
        title="NAF"
        ingress="Lill, Yngve, Andreas, Marius, Mathias, Svein Helge, Petter og John har tilsammen vært innom over 20 prosjekter. Blant annet ny kjøpekontrakt med digital signering, interne systemer som får sjappa til å gå rundt, og ikke minst studentprosjektet som ble startskuddet for den nye medlemsappen."
        link="/prosjekter/naf"
      />
      <Project
        image={{ fluidImage: images.naf, alt: 'alt' }}
        title="Statens Pensjonskasse"
        ingress="Dan jobber er med på å lage en ny saksbehandlingsløsning som de ansatte skal bruke til å sørge for at deres 1 million medlemmer får riktig pensjon til riktig tid. Å gjøre pensjon enkelt for brukeren er ingen liten ambisjon, men med Dan på laget er de godt på vei."
        link="/prosjekter/naf"
      />
      <Project
        image={{ fluidImage: images.naf, alt: 'alt' }}
        title="Statens Vegvesen"
        ingress="Jan Willem, Ulf, Ragnhild og Torstein er hos Statens Vegvesen. Der jobber de på et av norges største offentlige IT-prosjekter der man erstatter det gamle motorvognregisteret med nye digitale løsninger for blant annet trafikkstasjoner, bilforhandlere, og vanlige brukere gjennom selvbetjening på Din Side."
        link="/prosjekter/naf"
      />
      <Project
        image={{ fluidImage: images.eika, alt: 'Charlotte' }}
        title="Eika"
        ingress="Charlotte, Michael og Morten jobber med utvikling av mobilapper og banksystemer hos Eika. De gjør det enklere for kunden å få oversikt over egne sparepenger og gjør det til en lek å investere i fond og aksjer. Eika alliansen er en samling med 66 lokalbanker."
        link="/prosjekter/naf"
      />
    </Projects>
  );
};

export default SecondPage;
