import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import { useStaticQuery, graphql } from 'gatsby';
import {COLOR_CLAVE_SKIN} from "../colors";
import {onDesktop, onMobile} from "../components/Breakpoints";

const PADDING_TOP_DESKTOP = '6rem';
const PADDING_TOP_MOBILE = '4.75rem';

const HvemViEr = () => {
  const images = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "190920_Clave_lowres_11.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <>
      <main>
        <Header/>
        <SEO title="Se hvem vi er" description=""/>
          <TitleWrapper>
          <PageHeader
            title="Se hvem vi er"
            imageProps={{
              fluidImage: images.header,
              width: 1227,
              height: 728,
            }}
          />
          </TitleWrapper>
        <Layout>
          <h2>
            Vi mener at det er godt og litt annerledes å være en Claver. Vi
            føler en tilhørighet både til selskapet og til kollegaene våre.
          </h2>
          <p>
            Det er flest hverdager i året, og i denne hverdagen setter vi
            trivsel og trygghet høyt. Når vi er trygge på hverandre får vi god
            lagånd og det er da vi kan lage fantastiske løsninger.
          </p>
          <p>
            Det er smart å ta avgjørelser sammen. Åpenheten vi har gjør at vi
            vet hva som rører seg i selskapet, og da er det også enklere å
            påvirke retning. Siden selskapet er eid av oss ansatte er det også
            vi som bestemmer.
          </p>

          <p>
            Sammen reiser vi ut i verden på jakt etter inspirasjon. Faglig
            utvikling er viktig for oss, både som team og for hver enkelt.
            Vi har innedager vi fyller med faglig innhold og prosjekter.
            Sammen ser vi muligheter, og vi skaper et kreativt fellesskap.
            Teknologi og brukeropplevelse er det beste vi vet.
          </p>
        </Layout>
      </main>
      <Footer/>
    </>
  );
};


const TitleWrapper = styled.div`
background-color: ${COLOR_CLAVE_SKIN};
    ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  
  `)}
      ${onMobile(`
  padding-top: ${PADDING_TOP_MOBILE};
  `)}
`;

const Ingress = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
`;

export default HvemViEr;
