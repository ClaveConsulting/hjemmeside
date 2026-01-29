import React from "react";
import styled from "styled-components";
import { COLOR_CLAVE_BLUE, COLOR_CLAVE_LIGHTBLUE } from "../colors";
import bildeKarine from "../images/190920_Clave_lowres_5.jpg";
import bildeAnniken from "../images/190920_Clave_lowres_12.jpg";
import { Gallery, GalleryImage } from "./Gallery";
import Layout, { ColorContext } from "./Layout";

const JoinSection = () => {
	const AsideContent = () => {
		return (
			<ColorContext.Provider
				value={{
					backgroundColor: COLOR_CLAVE_LIGHTBLUE,
					textColor: COLOR_CLAVE_BLUE,
				}}
			>
				<AsideDiv>
					<h2>Bli en av oss!</h2>
					<h3>Jobbe som utvikler</h3>
					<p>
						Som utvikler i Clave får du jobbe med det siste nye innen teknologi.
						<br />
						<br />
						<PLink href="/jobb-som-utvikler">Finn ut mer om det her</PLink>
					</p>
					<br />
					<br />
					<h3>Jobbe som designer</h3>
					<p>
						Nysgjerrig på hvordan det er å jobbe som designer i Clave?
						<br />
						<br />
						<PLink href="/jobb-som-designer">Få svaret her</PLink>
					</p>
					<br />
					<br />
					<h3>Sommerjobb som designer 2026</h3>
					<p>
						Ønsker du deg en spennende sommerjobb som gir deg verdifull arbeidserfaring?
						<br />
						<br />
						<PLink href={"https://clave.homerun.co/ux-designer-til-sommerjobb-hos-clave-2026"}>Søk her</PLink>
					</p>
				</AsideDiv>
			</ColorContext.Provider>
		);
	};

	return (
		<Layout asideContent={AsideContent()}>
			<GalleryWrapper>
				<Gallery>
					<GalleryImage
						alt="Anniken"
						width="406"
						height="206"
						src={bildeAnniken.src}
					/>
					<GalleryImage
						alt="Karine"
						width="192"
						height="261"
						src={bildeKarine.src}
					/>
				</Gallery>
			</GalleryWrapper>
		</Layout>
	);
};

const GalleryWrapper = styled.div`
    display: grid;
    max-width: 600px;
    height: 100%;
    width: 100%;
    align-items: center;
    margin: auto;
`;

const AsideDiv = styled.div`
    background-color: ${COLOR_CLAVE_LIGHTBLUE};
    color: ${COLOR_CLAVE_BLUE};
    padding: 96px 80% 96px 143px;
    margin: 0 -110% 0 -96px;

    @media only screen and (max-width: 719px) {
    padding: 3rem;
    margin: 3rem -3rem 0;
  }`;

const PLink = styled.a`
    color: ${COLOR_CLAVE_BLUE};
    text-decoration: underline;
    font-size: 1.5rem;
    line-height: 2.0625rem;
    cursor: pointer;

    @media only screen and (max-width: 719px) {
    font-size: 1.125rem;
    line-height: 1.5625rem;
    }`;

export default JoinSection;
