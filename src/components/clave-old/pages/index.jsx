import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from "../colors";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout, {
	ColorContext,
	Container,
	DESKTOP_PADDING,
	MOBILE_PADDING,
} from "../components/Layout";
import Title from "../components/Title";

import { onDesktop, onMobile } from "../components/Breakpoints";
import { RightArrowLink } from "../components/ClaveLink";
import { Ingress } from "../components/Ingress";
import JoinSection from "../components/JoinSection";
import BrukeropplevelseIcon from "../components/icons/clave_ikon_brukeropplevelse.svg?react";
import RaadgivningIcon from "../components/icons/clave_ikon_radgivning.svg?react";
import SystemutviklingIcon from "../components/icons/clave_ikon_systemutvikling.svg?react";
import "./index.css";

const inBrowser = typeof window !== "undefined";
import headerBilde from "../images/frontpage1.png";

const IsLandscapeScreen = () =>
	inBrowser ? window.innerWidth >= window.innerHeight : false;

const IndexPage = () => {
	const GREEN_BACKGROUND = {
		backgroundColor: COLOR_CLAVE_GREEN,
		textColor: COLOR_CLAVE_PEACH,
	};

	const scoverlayElement = useRef();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const scrollY = () => (inBrowser ? window.scrollY : 0);

		const setClipPath = () => {
			if (scoverlayElement.current == null) return;
			scoverlayElement.current.style.clipPath = IsLandscapeScreen()
				? `circle(calc(${1.5 * scrollY()}px + min(45vh, 45vw)) at 85% 70%)`
				: `circle(calc(${1 * scrollY()}px + 25vh) at 85% 85%)`;
		};
		setClipPath();
		window.addEventListener("scroll", setClipPath);
		return () => {
			window.removeEventListener("scroll", setClipPath);
		};
	}, [scoverlayElement]);

	return (
		<>
			<main>
				<ColorContext.Provider value={GREEN_BACKGROUND}>
					<StyledFirstSection>
						<StickyScrollBox>
							<PrescrollContent>
								<Header frontPage useSkinColoredHamburgerMenu={true} />
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
								<Header
									frontPage
									useSkinColoredHamburgerMenu={false}
									textColor={COLOR_CLAVE_GREEN}
								/>
								<StyledTextPanel>
									<TitleWrapper>
										<Title color={COLOR_CLAVE_GREEN}>
											Vi er en gjeng flinke designere og utviklere med stort
											engasjement for det vi driver med
										</Title>
									</TitleWrapper>
								</StyledTextPanel>
								<StyledBackgroundImage>
									<ScrollImage src={headerBilde.src} />
								</StyledBackgroundImage>
							</PostsrollContent>
						</StickyScrollBox>
					</StyledFirstSection>
				</ColorContext.Provider>
				<Layout>
					<FrontPageTextContent>
						<Ingress>
							Vi brenner for teknologi, innovasjon og å lage de aller beste
							løsningene for menneskene som skal bruke dem. Vi er stolte av
							jobbene vi gjør og enda stoltere av relasjonene vi bygger med
							kundene våre.
						</Ingress>
					</FrontPageTextContent>
				</Layout>
				<Container>
					<Container.Content>
						<WideWrapper>
							<h2>Vi liker å drive med</h2>
							<InfoFlexbox>
								<InfoBox>
									<BrukeropplevelseLogo />
									<h3>Brukeropplevelse og UX-design</h3>
									<p>
										De beste løsningene lager vi når vi forstår brukerne og
										deres behov. Vi gjennomfører alt fra behovskartlegging,
										brukertesting og større tjenestedesignprosjekter.
									</p>
								</InfoBox>
								<InfoBox>
									<SystemutviklingLogo />
									<h3>Systemutvikling</h3>
									<p>
										Vi lager intuitive og innovative løsninger som virker. Vi
										kan hele tjenestestacken: arkitektur, database, frontend,
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
							<RightArrowLink href="/hva-vi-gjor">
								Se mer om hva vi gjør
							</RightArrowLink>
						</WideWrapper>
					</Container.Content>
				</Container>
				<JoinSection />
			</main>
			<ColorContext.Provider value={GREEN_BACKGROUND}>
				<Footer />
			</ColorContext.Provider>
		</>
	);
};

const PADDING_TOP_DESKTOP = "6rem";
const PADDING_TOP_MOBILE = "4.75rem";

const FrontPageTextContent = styled.div`
  padding-top: 3rem;
`;

const TitleWrapper = styled.div`
	${onDesktop(`
		padding-top: ${PADDING_TOP_DESKTOP};
    padding-left: ${DESKTOP_PADDING};
  `)};
	${onMobile(`
		padding-top: ${PADDING_TOP_MOBILE};
    padding-left: ${MOBILE_PADDING};
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

const ScrollImage = styled.img`
  display: block;
  width: 100%;
  height: 100vh;
  margin-bottom: 0;
	${onMobile(`
		height: 50vh;
  `)};
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
  `)};
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
  `)};
`;

const ScrollContent = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  flex-direction: column;
`;

const PrescrollContent = styled(ScrollContent)`
  background-color: ${COLOR_CLAVE_GREEN};
`;

const PostsrollContent = styled(ScrollContent)`
  background-color: ${COLOR_CLAVE_PEACH};
  clip-path: ${
		// biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
		IsLandscapeScreen() ? `circle(45vw at 85% 70%)` : `circle(25vh at 85% 85%);`
	}
`;

const LogoStyles = css`
  width: 15rem;
  height: auto;
  margin-bottom: 20px;  
`;

const BrukeropplevelseLogo = styled(BrukeropplevelseIcon)`${LogoStyles}`;

const SystemutviklingLogo = styled(SystemutviklingIcon)`${LogoStyles}`;

const RaadgivningLogo = styled(RaadgivningIcon)`${LogoStyles}`;

const WideWrapper = styled.div`
    padding: 0 6rem 8rem;

    ${onMobile(`
      padding: 0 3rem 4rem;
      `)}
`;

const InfoBox = styled.div`
  max-width: 25rem;
  min-width: 20rem;
  margin-top: 30px;
  flex-shrink: 1;
  width: 30%;
  
  h3 {
    min-height: 98px;
  }

  ${onMobile(`
      width: auto;
      h3 {
        min-height: auto;
      }
    `)}
`;

const InfoFlexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;

	${onDesktop(`
		flex-direction: row;
  `)}
`;

export default IndexPage;
