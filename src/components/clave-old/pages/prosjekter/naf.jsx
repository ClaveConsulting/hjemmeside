import React from "react";
import { ProjectPageTemplate } from "../../components/ProjectTemplate";
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SUNNY } from "../../colors";
import mainBilde from "../../images/190920_Clave_lowres_6.jpg";
import leftBilde from "../../images/190920_Clave_lowres_13.jpg";
import rightBilde from "../../images/190920_Clave_lowres_18.jpg";

const ProjectPage = () => {
	return (
		<ProjectPageTemplate
			mainImg={mainBilde.src}
			firstImg={leftBilde.src}
			secondImg={rightBilde.src}
			title="NAF"
			ingress="Over flere år har vi vært så heldige å få lov til å kombinere vår
              kompetanse innenfor brukeropplevelse, utvikling og prosjektledelse
              med NAF sin tunge innsikt i bilhold og trafikksikkerhet."
			keywords={[]}
			methodology={null}
			technology={null}
			finalText="Det har vært litt av en reise hittil som vi er stolte over å ha fått være med på. Som de sier hos NAF: «Reisen blir aldri slik man hadde tenkt», noe som gjør det til et spennende og variert oppdrag med både små og store seiere underveis."
			backgroundColor={COLOR_CLAVE_SUNNY}
			textColor={COLOR_CLAVE_GREEN}
		>
			<div>
				<p>
					Ved å samarbeide tett med den snart 100 år gamle medlemsorganisasjonen
					har vi vært med å skape gode løsninger. Vi har et knippe konsulenter
					som bidrar med både stort og smått hos NAF. Gjennom årene har vi
					bidratt i over 20 ulike prosjekter.
				</p>
				<p>
					Blant mye annet har vi designet og utviklet NAF kjøpekontrakt med
					digital signering. Brukerne og deres kronglete ferd gjennom en
					bilhandel sto i sentrum når vi jobbet for å gjøre deres opplevelse
					tryggere og mindre komplisert.
				</p>
				<p>
					Vi har også mange utviklere som bistår NAF med å videreutvikle og
					forbedre de mange interne systemene alle større organisasjoner er
					avhengige av for å få hjulene til å gå rundt.
				</p>
				<p>
					Startskuddet for NAF sin nye medlemsapp ble avfyrt gjennom et
					studentprosjekt Clave gjennomførte. Appen har blant annet erstattet
					behovet for et fysisk medlemskort og inneholder det meste du har behov
					for som bileier og sjåfør.
				</p>
				<p>
					Felles for alle prosjektene vi gjennomfører med NAF er at brukeren
					står i sentrum og at det vi utvikler raskt skal få verdi både for
					medlemmer og organisasjonen.
				</p>
			</div>
		</ProjectPageTemplate>
	);
};

export default ProjectPage;
