import React from 'react';
import styled from 'styled-components';
import {
  ProjectPageTemplate,
  Ingress,
  Paragraph,
} from '../../components/ProjectTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import { COLOR_CLAVE_SKIN, COLOR_CLAVE_GREEN } from '../../colors';

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
    <>
      <main>
        <ProjectPageTemplate
          mainImg={images.main}
          leftImg={images.left}
          rightImg={images.right}
          title="Komplett Group"
          ingress={
            <Ingress>
              Sammen med Komplett jobbet vi mot å skape smarte og smilende
              løsninger som gjør livet lettere både for brukerne og de som
              jobbet i Komplett. Fordi vi var folk med mange ulike bakgrunner
              som tenkte sammen og utfylte hverandre, kunne vi skape entusiasme.
            </Ingress>
          }
          body={
            <TextComponentWrapper>
              <Paragraph>
                Over lang tid var vi mange Clavere hos Komplett, hvor vi sammen
                med Komplett skapte blant annet den store Markedsplassen, lagde
                nye betalingsløsninger, ny meny, nytt apotek og ny PC-bygger.
              </Paragraph>

              <Paragraph>
                Teamene i Komplett bestod av UX'ere, utviklere og testere fra
                både Komplett, Clave og det Polske selskapet Fabres. I tillegg
                var alltid forretning med i prosessen. Vi møttes selvfølgelig av
                og til, men utviklet også et skikkelig godt forhold ved å se og
                snakke med hverandre via video hver dag. Ved å jobbe i
                tverrfaglige team, på tvers av landegrensene, har vi lært hva
                som er viktigst for at samarbeidet skal fungere aller best.{' '}
              </Paragraph>

              <Paragraph>
                Komplett er modige. De ser muligheter og kaster seg inn i nye
                markeder. Reisen med Komplett har vært spennende. - Fra å
                utvikle det alle håpet var riktig, til å faktisk lytte til
                brukeren i alt som utvikles. Alltid. Vi inviterte brukeren til
                dialog, brukertestet det vi lagde og samarbeidet tett med
                kundeservice. Fail fast, men snakk med brukeren først!
              </Paragraph>
            </TextComponentWrapper>
          }
          keywords={[
            'Oppstart 2015',
            'Omtrent 18.000 arbeidstimer hver dag',
            'UX’ere, front- og backend utviklere, testere, arkitekter og leveranseledere',
          ]}
          methodology="Scrum, Spotify Engineering Culture"
          technology="IMS SQL Server, MS .NET Core, Azure, JavaScript (React.js, AngularJS), CSS, HTML, REST, SOAP, Umbraco CMS, Confluence, Jira, Github, Jenkins CI, Octopus Deploy"
          finalText="Komplett er Nordens største netthandelsaktør. Nettbutikkene fornyes og videreutvikles kontinuerlig, og utviklingsavdelingen jobber med alle deler av Komplett-butikkens plattform og hele kundereisen på nett."
          backgroundColor={COLOR_CLAVE_SKIN}
          textColor={COLOR_CLAVE_GREEN}
        />
      </main>
    </>
  );
};

const TextComponentWrapper = styled.p``;

export default ProjectPage;
