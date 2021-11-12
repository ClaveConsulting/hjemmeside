import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import Image from '../components/Image';
import SEO from '../components/Seo';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from '../colors';
import Header from '../components/Header';
import Title from '../components/Title';
import Layout, {
  ColorContext,
  DESKTOP_PADDING,
  MOBILE_PADDING,
} from '../components/Layout';
import Footer from '../components/Footer';

import './index.css';
import JoinBanner from '../components/JoinBanner';
import CtaLink from '../components/CtaLink';
import { graphql, useStaticQuery } from 'gatsby';
import BrukeropplevelseIcon from '../components/icons/clave_ikon_brukeropplevelse.svg';
import SystemutviklingIcon from '../components/icons/clave_ikon_systemutvikling.svg';
import RaadgivningIcon from '../components/icons/clave_ikon_radgivning.svg';
import { onDesktop, onMobile } from '../components/Breakpoints';

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

const inBrowser = typeof window !== 'undefined';

const IsLandscapeScreen = () => inBrowser ? window.innerWidth > window.innerHeight : false;

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "frontpage1.png" }) {
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
    textColor: COLOR_CLAVE_PEACH,
  };

  const scoverlayElement = useRef();

  useEffect(() => {
    const scrollY = () => inBrowser ? window.scrollY : 0;

    const setClipPath = () => {
      scoverlayElement.current.style.clipPath = IsLandscapeScreen() ?
        `circle(calc(${1.5 * scrollY()}px + min(45vh, 45vw)) at 85% 70%)` :
        `circle(calc(${1 * scrollY()}px + 25vh) at 85% 85%)`
    }
    setClipPath();
    window.addEventListener('scroll', setClipPath)
    return () => { window.removeEventListener('scroll', setClipPath) };
  }, [scoverlayElement])

  return (
    <>
      <main>
        <SEO title="Forside" />
        <ColorContext.Provider value={GREEN_BACKGROUND}>
          <StyledFirstSection>
            <StickyScrollBox >
              <PrescrollContent>
                <Header frontPage useSkinColoredHamburgerMenu />
                <StyledTextPanel>
                  <TitleWrapper>
                    <Title color={COLOR_CLAVE_PEACH}>
                      Vi er en gjeng flinke designere og utviklere med stort
                      engasjement for det vi driver med
                    </Title>
                  </TitleWrapper>
                </StyledTextPanel>
              </PrescrollContent>
              <PostsrollContent ref={scoverlayElement}>
                <Header frontPage textColor={COLOR_CLAVE_GREEN} />
                <StyledTextPanel>
                  <TitleWrapper>
                    <Title color={COLOR_CLAVE_GREEN}>
                      Vi er en gjeng flinke designere og utviklere med stort
                      engasjement for det vi driver med
                    </Title>
                  </TitleWrapper>
                </StyledTextPanel>
                <StyledBackgroundImage>
                  <Image fluidImage={images.header} style={{ height: IsLandscapeScreen() ? "100vh" : "50vh" }} />
                </StyledBackgroundImage>
              </PostsrollContent>
            </StickyScrollBox>
          </StyledFirstSection>
        </ColorContext.Provider>
        <Layout>
          <FrontPageTextContent>
            <h2>
              Vi brenner for teknologi, innovasjon og å lage de aller beste
              løsningene for menneskene som skal bruke dem. Vi er stolte av
              jobbene vi gjør og enda stoltere av relasjonene vi bygger med
              kundene våre.
            </h2>
            <InfoFlexbox>
              <InfoBox>
                <BrukeropplevelseLogo />
                <h3>Brukeropplevelse og UX-design</h3>
                <p>
                  De beste løsningene lager vi når vi forstår brukerne og deres
                  behov. Vi gjennomfører alt fra behovskartlegging,
                  brukertesting og større tjenestedesignprosjekter.
                </p>
              </InfoBox>
              <InfoBox>
                <SystemutviklingLogo />
                <h3>Systemutvikling</h3>
                <p>
                  Vi lager intuitive og innovative løsninger som virker. Vi kan
                  hele tjenestestacken: arkitektur, database, frontend,
                  apputvikling, infrastruktur, nettverk og skytjenester.
                </p>
              </InfoBox>
              <InfoBox>
                <RaadgivningLogo />
                <h3>Rådgivning og prosjektledelse</h3>
                <p>
                  Vi har lang erfaring med rådgivning innenfor teknologi,
                  prosess og arkitektur. I samarbeid med kunden kommer vi frem
                  til gode løsninger på komplekse problemer.
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
  width: 100%;
  height: max(180vh, 90vw);
`;

const StickyScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
`;

const StyledTextPanel = styled.div`
  display: flex;
  height: 60vh;
  width: 90%;
  max-width: 45em;
  flex-direction: column;
  justify-content: space-around;
  ${onDesktop(`
    height: 80vh;
    width: 55%;
  `)}
`;

const StyledBackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 90%;
  ${onDesktop(`
    width: 65%;
    max-width: 150vh;
  `)}
`;

const ScrollContent = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  flex-direction: column;
  padding: 0 ${MOBILE_PADDING};

  ${onDesktop(`
    padding: 0 ${DESKTOP_PADDING};
  `)}
`;

const PrescrollContent = styled(ScrollContent)`
  background-color: ${COLOR_CLAVE_GREEN};
`;

const PostsrollContent = styled(ScrollContent)`
  background-color: ${COLOR_CLAVE_PEACH};
  clip-path: ${IsLandscapeScreen() ?
  `circle(45vw at 85% 70%)` :
  `circle(25vh at 85% 85%);`}
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
