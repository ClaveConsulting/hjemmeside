import React from "react";
import styled from "styled-components";
import { COLOR_CLAVE_MUSTARD } from "../colors";
import { onMobile } from "./Breakpoints";
import { RightArrowLink } from "./ClaveLink";

export const Projects = () => {
	return (
		<ProjectList>
			<h2>Sjekk ut hva vi gjør hos kundene våre</h2>
			<p>
				Det er stort sett alltid flere Clavere ute hos de forskjellige kundene
				våre, og gjerne en blanding av UX-designere, prosjektledere og
				utviklere. Vi jobber innenfor mange ulike felt: Nettbutikk, spa, post,
				bil, offentlig forvaltning og humanitært arbeid.
			</p>
			<RightArrowLink showOnMobile href={"/prosjekter/naf"}>
				NAF
			</RightArrowLink>
			<RightArrowLink showOnMobile href={"/prosjekter/the-well"}>
				The Well
			</RightArrowLink>
			<RightArrowLink showOnMobile href={"/prosjekter/komplett"}>
				Komplett
			</RightArrowLink>
		</ProjectList>
	);
};

const ProjectList = styled.ul`
  margin: -70px -96px -90px -70px;
  padding: 70px 96px 120px 70px;
  list-style: none;
  flex: 1 0 auto;
  background-color: ${COLOR_CLAVE_MUSTARD};
  ${onMobile(`
      margin: -70px -47px -90px;
      padding: 70px 47px 120px;
    `)}
`;
