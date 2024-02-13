import React from "react";
import styled from "styled-components";

import { COLOR_CLAVE_PEACH } from "../colors";
import Footer from "../components/Footer";
import { Gallery, GalleryImage } from "../components/Gallery";
import Header from "../components/Header";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { Projects } from "../components/ProjectList";
import headerBilde from "../images/190920_Clave_lowres_2.jpg";
import pointingBilde from "../images/190920_Clave_lowres_9.jpg";
import larsPetterBilde from "../images/190920_Clave_lowres_14.jpg";
import laptopBilde from "../images/190920_Clave_lowres_16.jpg";

const HvaViGjorPage = (props) => {
	return (
		<>
			<main>
				<Header {...props} />
				<TitleWrapper>
					<PageHeader
						title="Se hva vi gjør"
						ingress={
							<>
								Brukeropplevelse, systemutvikling og rådgivning er
								spesialitetene våre. Vi er stolte av jobbene vi gjør og enda
								stoltere av relasjonene vi bygger med kundene våre.
							</>
						}
						imageProps={{
							src: headerBilde.src,
							width: 1227,
							height: 728,
						}}
					/>
				</TitleWrapper>
				<Layout>
					<p>
						Vi lager løsninger for menneskene som skal bruke dem. Brukeren står
						derfor alltid i fokus når våre tverrfaglige team samarbeider om å
						lage intuitive løsninger. Fornøyde brukere gir fornøyde kunder.
					</p>
					<p>
						Vi er stolte av fagområdene våre, og er alltid opptatt av å være
						oppdatert på det siste innenfor metode, system og teknologi. Vi er
						skikkelig gode på å samarbeide tett med kundene våre og vi tror det
						er noe av det som gjør at vi lykkes.
					</p>
					<p>
						For å forstå menneskene som skal bruke løsningene vi lager må vi
						skaffe oss innsikt og det gjør vi ved hjelp av både kvalitative og
						kvantitative metoder. Vi gjennomfører alt fra behovskartlegging,
						brukertester, dybdeintervjuer og større tjenestedesignprosjekter.
						Kunnskap gir oss både mulighet til å skape noe nytt og til å
						forbedre det som allerede eksisterer.
					</p>
					<p>
						Vi benytter alltid moderne teknologi når vi ut utvikler løsninger.
						Vår spisskompetanse ligger innen komplekse web-løsninger som er tett
						integrert med økosystemet til kunden. Samlet har våre utviklere
						kompetanse på alt fra frontend med f.eks. React, til Java og .NET på
						backend.
					</p>
					<p>
						Vi i Clave har vært med å starte konsulentselskapet Fabres som er
						lokalisert i Polen. Noen prosjekter gjør vi derfor sammen med
						utviklere og testere derfra.
					</p>
				</Layout>
				<Layout
					asideContent={
						<UserTestingBlock>
							<h4>Brukertesting er viktig!</h4>
							<UserTestingText>
								Vi har laget brukertesting som en egen tjeneste, fordi
								brukertesting er jo noe alle trenger å gjøre jevnlig. Vi jobber
								på tvers av de kundene vi har, og for andre som trenger å få
								brukertestet løsningene sine. Kontakt oss hvis du ønsker å høre
								mer om brukertesting og tjenesten vi leverer.
							</UserTestingText>
							<AsideImage
								src={laptopBilde.src}
								width="387"
								height="279"
								alt="Brukertesting"
							/>
						</UserTestingBlock>
					}
				>
					<Projects />
					<Gallery>
						<GalleryImage
							// fluidImage={images.larsPetter}
							src={larsPetterBilde.src}
							width="681"
							height="470"
							alt="Lars-Petter og Yngve"
						/>
						<GalleryImage
							src={pointingBilde.src}
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

const TitleWrapper = styled.div`
    background-color: ${COLOR_CLAVE_PEACH};
`;

const AsideImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const UserTestingBlock = styled.div`
    margin-top: 150px;
    @media only screen and (max-width: 719px) {
    margin-top: 0;
    }`;

const UserTestingText = styled.p`
    font-size: 18px;
    line-height: 23.4px;
`;

export default HvaViGjorPage;
