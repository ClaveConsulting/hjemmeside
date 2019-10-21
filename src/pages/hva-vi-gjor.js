import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

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
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </main>
);

const Ingress = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
`;

export default SecondPage;
