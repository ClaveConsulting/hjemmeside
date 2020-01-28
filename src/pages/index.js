import React from 'react';
import styled from 'styled-components';

import Image from '../components/Image';
import SEO from '../components/Seo';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
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
import {onDesktop, onMobile} from '../components/Breakpoints';

const FrontPageTextContent = styled.div`
  padding-top: 3rem;
`;

const PADDING_TOP_DESKTOP = '6rem';
const PADDING_TOP_MOBILE = '4.75rem';

const InfoBox = styled.div`
  padding-right: 1rem;
  margin-right: 2.5rem;
  max-width: 25rem;

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
          <StyledFirstSection>
            <Header frontPage useSkinColoredHamburgerMenu />
            <StyledBackgroundImage>
              <Image fluidImage={images.header} />
            </StyledBackgroundImage>
            <StyledTextPanel>
              <TitleWrapper>
                  <Title color={COLOR_CLAVE_SKIN}>
                      Vi er en gjeng designere og utviklere med masse engasjement
                  </Title>
              </TitleWrapper>
            </StyledTextPanel>
          </StyledFirstSection>
        </ColorContext.Provider>
        <Layout>
          <FrontPageTextContent>
            <h2>
              Vi jobber i prosjekter og initiativer innen teknologi og
              innovasjon ute hos kunder. Her sitter vi gjerne over tid.
            </h2>
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
                  hele tjenestestacken: arkitektur, database og integrasjon,
                  frontend og apputvikling.
                </p>
              </InfoBox>
              <InfoBox>
                <RaadgivningLogo />
                <h3>Rådgivning</h3>
                <p>
                  Vi som jobber med rådgivning har alle lang erfaring. Vi
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

const TitleWrapper = styled.div`
    ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  `)}
      ${onMobile(`
  padding-top: ${PADDING_TOP_MOBILE};
  `)}
`;

const StyledFirstSection = styled.section`
  height: 100vh;
  width: 100%;
  padding: 0 ${MOBILE_PADDING};

  ${onDesktop(`
    padding: 0 ${DESKTOP_PADDING};
  `)}
`;

const StyledTextPanel = styled.div`
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
  width: 15rem;
  height: auto;
`;

const SystemutviklingLogo = styled(SystemutviklingIcon)`
  width: 15rem;
  height: auto;
`;

const RaadgivningLogo = styled(RaadgivningIcon)`
  width: 15rem;
  height: auto;
`;

export default IndexPage;
