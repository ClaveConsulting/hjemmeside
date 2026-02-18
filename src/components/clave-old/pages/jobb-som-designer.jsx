import React from "react";
import styled from "styled-components";
import { Ingress } from "../components/Ingress";
import Layout from "../components/Layout";
import MidSplitLayout from "../components/RecruitmentPages/MidSplitLayout";
import RecruitmentTemplate from "../components/RecruitmentPages/RecruitmentTemplate";
import piaBilde from "../images/190920_Clave_lowres_7.jpg";

const positions = [];

const JobbSomDesignerPage = (props) => {
	return (
		<RecruitmentTemplate positions={positions} title="Jobbe som designer">
			<Layout>
				<h1>Jobbe som designer</h1>
				<Ingress>
					Vi omskaper gode ideer til fungerende løsninger ved hjelp av dialog,
					faglig tyngde og grundige designprosesser. Gjennom å lage intuitive og
					tiltalende designløsninger forener vi brukernes behov med kundenes
					ønsker. Det er viktig for Clave at vi leverer nøkkelpersoner med stort
					hjerte for faget og kundenes virksomhet.
				</Ingress>
			</Layout>
			<MidSplitLayout image={piaBilde.src}>
				<h2>Er dette deg?</h2>
				<p>
					Vi i Clave liker folk som legger sjelen sin i å utforske, analysere og
					forstå, og som ikke er fremmed for å hoppe ut i ukjent farvann. Å
					visualisere nye konsepter er ingen sak for deg, og du finner stor
					glede i å videreutvikle disse konseptene sammen med utviklere og
					kunder.
				</p>
				<p>
					Vi ser etter deg som kan identifisere og analysere brukerbehov og
					krav. Du er god på å planlegge, gjennomføre og presentere
					brukerinnsikt. Samtidig er du i stand til å evaluere utviklet
					funksjonalitet og sørge for at leveransene våre har god kvalitet.
				</p>
				<p>
					Det skader ikke om du også:
					<List>
						<li>syns faglig utvikling er viktig</li>
						<li>
							trives i et sosialt arbeidsmiljø og kommuniserer godt med andre
						</li>
						<li>
							er selvgående og har evne til å stå for det du mener er den beste
							løsningen på faglige utfordringer
						</li>
					</List>
				</p>
			</MidSplitLayout>
		</RecruitmentTemplate>
	);
};

const List = styled.ul`
  margin: 20px 40px;
`;

export default JobbSomDesignerPage;
