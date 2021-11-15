import React from 'react';
import {
  ProjectPageTemplate,
} from './../../components/ProjectTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SUNNY } from '../../colors';

const ProjectPage = () => {
  const images = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "190920_Clave_lowres_8.jpg" }) {
        ...fluidImage
      }
      left: file(relativePath: { eq: "190920_Clave_lowres_7.jpg" }) {
        ...fluidImage
      }
      right: file(relativePath: { eq: "190920_Clave_lowres_3.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <ProjectPageTemplate
      mainImg={images.main}
      firstImg={images.left}
      secondImg={images.right}
      title="Komplett Group"
      ingress="Sammen med Komplett har vi jobbet fram enkle og smarte løsninger
              som gjør livet lettere både for kundene og for de som jobber hos
              Komplett."
      keywords={[
        'Oppstart 2015',
        'Omtrent 20.000 arbeidstimer per i dag',
        'UX’ere, front- og backend utviklere, testere, arkitekter og leveranseledere',
      ]}
      leftImg={images.first}
      rightImg={images.second}
      methodology="Scrum, Spotify Engineering Culture"
      technology="IMS SQL Server, MS .NET Core, Azure, JavaScript (React.js, AngularJS), CSS, HTML, REST, SOAP, Umbraco CMS, Confluence, Jira, Github, Jenkins CI, Octopus Deploy"
      finalText="Komplett er Nordens største netthandelsaktør. Nettbutikkene fornyes og videreutvikles kontinuerlig. Utviklingsavdelingen jobber med alle deler av Komplett-butikkens plattform og hele kundereisen på nett."
      backgroundColor={COLOR_CLAVE_SUNNY}
      textColor={COLOR_CLAVE_GREEN}
    >
      <div>
        <p>
          Vi har vært mange Clavere hos Komplett gjennom flere år. Sammen
          har vi blant annet skapt nye betalingsløsninger, ny navigasjon,
          ny “pc-bygger” og et nytt apotek.
        </p>
        <p>
          De tverrfaglige teamene vi har jobbet i har bestått av både
          utviklere, UX-designere og testere fra Komplett, Clave og
          datterselskapet vårt Fabres. Vi har hele tiden hatt et tett
          samarbeid med forretningssiden hos Komplett og sånn har vi klart
          å sikre at vi alltid går i samme retning som kundens ambisjoner.
        </p>
        <p>
          Komplett er modige. De ser muligheter og kaster seg inn i nye
          markeder. Vår reise sammen med dem har derfor vært veldig
          spennende - fra å utvikle det vi alle håpet skulle være riktig
          har vi beveget oss til alltid å lytte til kundene til Komplett
          når vi har utviklet noe nytt. Gjennom dialog, brukertesting og
          samarbeid med kundeservice er vi stolte av å ha laget produkter
          som kundene syns er enkle å bruke og som har hatt kort vei fra
          tegnebord til produksjon.
        </p>
      </div>
    </ProjectPageTemplate>
  );
};

export default ProjectPage;