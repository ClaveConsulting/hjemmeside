import React from 'react';
import styled from 'styled-components';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';


import Image from '../components/Image';
import SEO from '../components/Seo';
import { COLOR_CLAVE_SKIN } from '../colors';
import ClaveLink from '../components/ClaveLink';
import Header from '../components/Header';
import Title from '../components/Title';
import Layout, { onDesktop } from '../components/Layout';

import './index.css';
import JoinBanner from '../components/JoinBanner';
import CtaLink from '../components/CtaLink';
import { graphql, useStaticQuery } from 'gatsby';
import BrukeropplevelseIcon from '../components/icons/clave_ikon_brukeropplevelse.svg';
import SystemutviklingIcon from '../components/icons/clave_ikon_systemutvikling.svg';
import RaadgivningIcon from '../components/icons/clave_ikon_radgivning.svg';

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "clave-frontpage.png" }) {
        ...fluidImage
      }
      karine: file(relativePath: { eq: "190920_Clave_lowres_5.jpg" }) {
        ...fluidImage
      }
      anniken: file(relativePath: { eq: "190920_Clave_lowres_12.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <main>
      <SEO title="Forside" />
      <StyledFirstSection id="frontpage-first-section">
        <Header textClassName="animateSkinToGreenText" frontPage />
        <StyledBackgroundImage>
          <Image fluidImage={images.header} />
        </StyledBackgroundImage>
        <StyledTextPanel>
          <Title color={COLOR_CLAVE_SKIN} className="animateSkinToGreenText">
            De beste løsningene krever de beste folkene.
          </Title>
          <div>
            <FrontPageLink className="animateSkinToGreenText" to="/page-2/">
              Bli bedre kjent med oss
            </FrontPageLink>
          </div>
        </StyledTextPanel>
      </StyledFirstSection>
      <Layout>
        <h2 className="front-page-ingress">
          Vi jobber i prosjekter og initiativer innen teknologi og innovasjon og
          ute hos kunder. Her sitter vi gjerne over tid.
        </h2>
        <h2>
          Av og til får vi også med oss utviklere og testere i selskapet vi har
          etablert i Polen.
        </h2>
          <div className="info-flexbox">
              <div>
                  <BrukeropplevelseLogo/>
                  <h3>Brukeropplevelse</h3>
                  <p>Brukeropplevelse handler om å forstå brukerens behov. Vi snakker med brukeren, gjerne ved å
                      brukervennlighetsteste.
                      Vi har til og med vårt eget dedikerte brukertestteam!</p>
              </div>
              <div>
                  <SystemutviklingLogo/>
                  <h3>Systemutvikling</h3>
                  <p>Sammen med våre designere lager vi intuitive løsninger.
                      Vi kan hele tjenestestacken; arkitektur, database og integrasjon, frontend og apputvikling.</p>
              </div>
              <div>
                  <RaadgivningLogo/>
                  <h3>Rådgivning</h3>
                  <p>Vi som jobber med prosjektledelse har alle lang erfaring. Vi er opptatt av at teamet jobber sammen,
                      mot samme mål, og blir godt kjent.</p>
              </div>
          </div>
        <CtaLink to="/hva-vi-gjor">Se mer om hva vi gjør</CtaLink>
      </Layout>
      <JoinBanner images={images} />
    </main>
  );
};

const StyledFirstSection = styled.section`
  height: 100vh;
  width: 100%;

  padding: 0 1rem;

  ${onDesktop(`
    padding: 0 1.5rem;
  `)}
`;

const StyledTextPanel = styled.div`
  padding-top: 10%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  @media only screen and (max-width: 480px) {
    width: 80%
  }
`;

const FrontPageLink = styled(ClaveLink)`
  color: ${COLOR_CLAVE_SKIN};
`;

const StyledBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  padding-left: 60%;
  width: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${COLOR_CLAVE_GREEN};
  @media only screen and (max-width: 600px) {
    padding-left: 20%;
  }
`;

const BrukeropplevelseLogo = styled(BrukeropplevelseIcon)`
  width: 10em;
  height: auto;
`;

const SystemutviklingLogo = styled(SystemutviklingIcon)`
  width: 10em;
  height: auto;
`;

const RaadgivningLogo = styled(RaadgivningIcon)`
  width: 10em;
  height: auto;
`;

export default IndexPage;
