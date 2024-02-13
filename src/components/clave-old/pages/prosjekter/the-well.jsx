import React from "react";
import { ProjectPageTemplate } from "../../components/ProjectTemplate";
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SUNNY } from "../../colors";
import mainBilde from "../../images/190920_Clave_lowres_15.jpg";
import leftBilde from "../../images/190920_Clave_lowres_14.jpg";
import rightBilde from "../../images/190920_Clave_lowres_12.jpg";

const ProjectPage = () => {
	return (
		<ProjectPageTemplate
			mainImg={mainBilde.src}
			firstImg={leftBilde.src}
			secondImg={rightBilde.src}
			title="The Well"
			ingress="Hos The Well jobber vi for å gjøre det enkelt å slappe av. Vi har fått muligheten til å jobbe med nytt design på nettsidene, kjøpsprosessen og ny bookingløsning."
			keywords={[
				"Oppstart 2019",
				"Omtrent 5.000 arbeidstimer per år",
				"UX’er, front- og backend utviklere",
			]}
			methodology="Lean"
			technology="Teknologi .NET Core, React.js, Azure, MS SQL Server, Azure DevOps, Umbraco CMS, Kanban"
			finalText="The Well er Nordens største spa- og velværesenter som ligger på Kolbotn. Her finner du 10,500 kvm med bassenger og forskjellige saunarom."
			backgroundColor={COLOR_CLAVE_SUNNY}
			textColor={COLOR_CLAVE_GREEN}
		>
			<div>
				<p>
					Gjennom månedlige brukertester har vi lært oss å kjenne brukerne til
					The Well, og en smidig utvilingsprosess gjør at vi raskt kan endre de
					tingene som ikke fungerer til en lav kostnad. Vårt samarbeid med The
					Well startet med at vi lagde en ny bookingløsning som gjør det enkelt
					å bestille spainngang, behandlinger, bussbilletter og å reservere bord
					i restauranten. Løsningen fungerer veldig bra fordi den er
					skreddersydd til behovene til The Well, og omsetningen på nett har
					aldri vært så høy som nå.
				</p>
				<p>
					Vi har også satt sammen et splitter nytt design både på nettsidene
					(thewell.no) og videreutviklet bookingsløsningen i forbindelse med at
					The Well åpner et nytt hotell sommeren 2021. Her har vi jobbet i alle
					stadier av prosjektet - fra konseptutvikling til ferdig produkt. I
					2020 har vi også utviklet en intern løsning for å gjøre det enkelt for
					de ansatte i The Well å håndtere alle bookinger.
				</p>
				<p>
					I løpet av prosjektet har vi vært alt fra 3 til 6 personer:
					Prosjektleder, UX-designer og utvikler fra Clave, samt utviklere fra
					Fabres i Polen.
				</p>
			</div>
		</ProjectPageTemplate>
	);
};

export default ProjectPage;
