import React from 'react';
import styled from 'styled-components';

import Layout, { MOBILE_PADDING } from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import CtaLink from '../components/CtaLink';
import { GalleryImage, Gallery } from '../components/Gallery';

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
  </main>
);

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
