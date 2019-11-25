import React from 'react';
import styled from 'styled-components';

import Image from '../components/Image';
import SEO from '../components/Seo';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import ClaveLink from '../components/ClaveLink';
import Header from '../components/Header';
import Title from '../components/Title';
import Layout, { ColorContext, DESKTOP_PADDING, MOBILE_PADDING } from '../components/Layout';
import Footer from '../components/Footer';

import './index.css';
import JoinBanner from '../components/JoinBanner';
import CtaLink from '../components/CtaLink';
import { graphql, useStaticQuery } from 'gatsby';
import BrukeropplevelseIcon from '../components/icons/clave_ikon_brukeropplevelse.svg';
import SystemutviklingIcon from '../components/icons/clave_ikon_systemutvikling.svg';
import RaadgivningIcon from '../components/icons/clave_ikon_radgivning.svg';
import { onDesktop } from '../components/Breakpoints';

const FrontPageIngress = styled.p`
  font-size: 2rem;
  font-weight: normal;
  font-family: 'basis-grotesque-medium-pro', Fallback, sans-serif;
`;

const FrontPageTextContent = styled.div`
  padding-top: 3rem;
`;

const InfoBox = styled.div`
  padding-right: 1rem;

  ${onDesktop(`
    flex: 1 1 33%;
  `)}
`;

const InfoFlexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;

  ${onDesktop(`
flex-direction: row;
`)}
`;

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

  const GREEN_BACKGROUND = {
    backgroundColor: COLOR_CLAVE_GREEN,
    textColor: COLOR_CLAVE_SKIN,
  };

  return (
    <>
      <main>
        <SEO title="Forside" />
        <ColorContext.Provider value={GREEN_BACKGROUND}>
          <Header frontPage />
          <StyledFirstSection>
            <StyledBackgroundImage>
              <Image fluidImage={images.header} />
            </StyledBackgroundImage>
            <StyledTextPanel>
              <Title color={COLOR_CLAVE_SKIN}>
                De beste løsningene krever de beste folkene.
              </Title>
              <div>
                <ClaveLink to="/page-2/">Bli bedre kjent med oss</ClaveLink>
              </div>
            </StyledTextPanel>
          </StyledFirstSection>
        </ColorContext.Provider>
        <Layout>
          <FrontPageTextContent>
            <FrontPageIngress>
              Vi jobber i prosjekter og initiativer innen teknologi og
              innovasjon og ute hos kunder. Her sitter vi gjerne over tid.
            </FrontPageIngress>
            <FrontPageIngress>
              Av og til får vi også med oss utviklere og testere i selskapet vi
              har etablert i Polen.
            </FrontPageIngress>
            <InfoFlexbox>
              <InfoBox>
                <BrukeropplevelseLogo />
                <h3>Brukeropplevelse</h3>
                <p>
                  Brukeropplevelse handler om å forstå brukerens behov. Vi
                  snakker med brukeren, gjerne ved å brukervennlighetsteste. Vi
                  har til og med vårt eget dedikerte brukertestteam!
                </p>
              </InfoBox>
              <InfoBox>
                <SystemutviklingLogo />
                <h3>Systemutvikling</h3>
                <p>
                  Sammen med våre designere lager vi intuitive løsninger. Vi kan
                  hele tjenestestacken; arkitektur, database og integrasjon,
                  frontend og apputvikling.
                </p>
              </InfoBox>
              <InfoBox>
                <RaadgivningLogo />
                <h3>Rådgivning</h3>
                <p>
                  Vi som jobber med prosjektledelse har alle lang erfaring. Vi
                  er opptatt av at teamet jobber sammen, mot samme mål, og blir
                  godt kjent.
                </p>
              </InfoBox>
            </InfoFlexbox>
            <CtaLink to="/hva-vi-gjor">Se mer om hva vi gjør</CtaLink>
          </FrontPageTextContent>
        </Layout>
        <JoinBanner images={images} />
      </main>
      <ColorContext.Provider value={GREEN_BACKGROUND}>
        <Footer />
      </ColorContext.Provider>
    </>
  );
};

const StyledFirstSection = styled.section`
  height: 100vh;
  width: 100%;
  padding: 0 ${MOBILE_PADDING};

  ${onDesktop(`
    padding: 0 ${DESKTOP_PADDING};
  `)}
`;

const StyledTextPanel = styled.div`
  padding-top: 10%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
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
  width: 10rem;
  height: auto;
`;

const SystemutviklingLogo = styled(SystemutviklingIcon)`
  width: 10rem;
  height: auto;
`;

const RaadgivningLogo = styled(RaadgivningIcon)`
  width: 10rem;
  height: auto;
`;

export default IndexPage;
