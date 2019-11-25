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
          title="NAF"
          ingress={
            <Ingress>
              Måten vi reiser og forflytter oss på endrer seg i rivende fart. Ved å jobbe smartere sammen og tenke nytt skal NAF være med i de skarpe svingene. Vi er med på reisen - og dette hjelper vi de med.
            </Ingress>
          }
          body={
            <TextComponentWrapper>
              <Paragraph>
              I tett samarbeid over flere år har vi kombinert vår kompetanse innen utvikling, brukeropplevelse, og prosjektledelse med NAF sin tunge innsikt i bilhold og trafikksikkerhet. Sammen skaper vi gode opplevelser på innsiden og utsiden av den snart 100 år gamle medlemsorganisasjonen.
              </Paragraph>

              <Paragraph>
              Vi har et knippe konsulenter som bidrar med både stort og smått hos NAF. Faktisk, har vi hjulpet til i over 20 prosjekter til sammen. Vi har blant annet designet og utviklet NAF kjøpekontrakt med digital signering. Brukerne og deres kronglete ferd gjennom en bilhandel har så klart stått i sentrum for å gjøre deres opplevelse tryggere og mindre komplisert. Tar du turen innom NAF finner du sikkert mange av våre utviklere som også hjelper til med de mange interne systemene. Ja, de tingene som får sjappa til å gå rundt.
              </Paragraph>

              <Paragraph>
              For ikke å glemme studentprosjektet vi gjennomførte i samarbeid med NAF. Til og med studenter får ta del i moroa. Dette ble nemlig startskuddet for NAF sin nye medlemsapp som vi har fått lov til å gå i gang med. Og det er bare noen av de spennende prosjektene vi har fått være med å drive frem ved hjelp av en god prosess basert på brukerinnsikt og eksperimenter.
              </Paragraph>
            </TextComponentWrapper>
          }
          keywords={["Oppstart i"
          ]}
          methodology=""
          technology=""
          finalText={"Det har vært litt av en reise hittil som vi er stolte over å ha fått være med på. Som de sier hos NAF: \"Reisen blir aldri slik man hadde tenkt\", noe som gjør det til et spennende og variert oppdrag med både små og store seiere underveis."}
          backgroundColor={COLOR_CLAVE_SKIN}
          textColor={COLOR_CLAVE_GREEN}
        />
      </main>
    </>
  );
};

const TextComponentWrapper = styled.p``;

export default ProjectPage;
