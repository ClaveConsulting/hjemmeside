import React from "react";
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SUNNY } from "../../colors";
import { ProjectPageTemplate } from "../../components/ProjectTemplate";
import mainBilde from "../../images/190920_Clave_lowres_1.jpg";
import rightBilde from "../../images/190920_Clave_lowres_3_crop.jpg";
import leftBilde from "../../images/190920_Clave_lowres_4.jpg";

const ProjectPage = () => {
	return (
		<ProjectPageTemplate
			mainImg={mainBilde.src}
			firstImg={leftBilde.src}
			secondImg={rightBilde.src}
			title="Eika"
			ingress="Hos Eika jobber vi med flere spennende prosjekter. Blant annet utvikler vi ny mobilbank, ny nettbank, løsninger for å forhindre hvitvasking av penger, og rådgiververktøy for salg av pensjonssparing. Alle disse tjenestene tilbyr Eika til over 50 lokale banker rundt om i landet."
			keywords={["Oppstart i 2019", "Java-utviklere og .NET-utviklere"]}
			methodology="Scrum. Autonome produktteam"
			technology="Kotlin, JavaScript, React.js, Redux, Prometheus, Grafana, React Native"
			backgroundColor={COLOR_CLAVE_SUNNY}
			textColor={COLOR_CLAVE_GREEN}
		>
			<div>
				<p>
					Prosjektene vi sitter på kjører på Java-plattformen. Det vil si det
					går ikke så mye i Java lenger, alt nytt er på Kotlin. Teknologien vi
					jobber med er ofte latest and greatest som gjør at vi lærer noe nytt
					og moro på jobb hver dag. Det er spennende når løsningene vi utvikler
					påvirker hverdagen til hundretusenvis av brukere.
				</p>
				<p>
					Produkt-teamene våre er tverrfaglige, bestående av utviklere, UXere,
					testere og produkteiere. Her sitter både konsulenter og kunder
					blandet. Alle nye funksjoner og endringer fører gjerne til reaksjoner
					hos brukerne. Både positive og negative og vi pivoterer raskt for å
					opprettholde høy kundetilfredshet.
				</p>
				<p>
					Utviklerne våre hos Eika er som regel fullstack. Allikevel jobber vi
					gjerne mest enten frontend eller backend. En typisk teknologistack for
					en backender består gjerne av Kotlin, Jersey, Jenkins og Openshift.
					Frontend-stacken er React, Redux og komponentbibliotek med React
					styleguidist. Flere av oss jobber også med mobilapputvikling og sitter
					da med react native og ren native utvikling i Swift og Kotlin.
				</p>
			</div>
		</ProjectPageTemplate>
	);
};

export default ProjectPage;
