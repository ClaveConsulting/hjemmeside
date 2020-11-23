import React from 'react';
import styled from 'styled-components';
import {
  ProjectPageTemplate,
  Ingress,
  Paragraph,
} from '../../components/ProjectTemplate';
import { useStaticQuery, graphql } from 'gatsby';
import { COLOR_CLAVE_SKIN, COLOR_CLAVE_GREEN } from '../../colors';
import Footer from '../../components/Footer';

const ProjectPage = () => {
  const images = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "190920_Clave_lowres_6.jpg" }) {
        ...fluidImage
      }
      left: file(relativePath: { eq: "190920_Clave_lowres_13.jpg" }) {
        ...fluidImage
      }
      right: file(relativePath: { eq: "190920_Clave_lowres_18.jpg" }) {
        ...fluidImage
      }
    }
  `);
  //
  return (
    <>
      <main>
        <ProjectPageTemplate
          mainImg={images.main}
          firstImg={images.left}
          secondImg={images.right}
          title="NAF"
          ingress={
            <Ingress>
              Over flere år har vi vært så heldige å få lov til å kombinere vår
              kompetanse innenfor brukeropplevelse, utvikling og prosjektledelse
              med NAF sin tunge innsikt i bilhold og trafikksikkerhet.
            </Ingress>
          }
          body={
            <TextComponentWrapper>
              <Paragraph>
                Ved å samarbeide tett med den snart 100 år gamle
                medlemsorganisasjonen har vi vært med å skape gode løsninger. Vi
                har et knippe konsulenter som bidrar med både stort og smått hos
                NAF. Gjennom årene har vi bidratt i over 20 ulike prosjekter.
              </Paragraph>

              <Paragraph>
                Blant mye annet har vi designet og utviklet NAF kjøpekontrakt
                med digital signering. Brukerne og deres kronglete ferd gjennom
                en bilhandel sto i sentrum når vi jobbet for å gjøre deres
                opplevelse tryggere og mindre komplisert.
              </Paragraph>

              <Paragraph>
                Vi har også mange utviklere som bistår NAF med å videreutvikle
                og forbedre de mange interne systemene alle større
                organisasjoner er avhengige av for å få hjulene til å gå rundt.
              </Paragraph>

              <Paragraph>
                Startskuddet for NAF sin nye medlemsapp ble avfyrt gjennom et
                studentprosjekt Clave gjennomførte. Appen har blant annet
                erstattet behovet for et fysisk medlemskort og inneholder det
                meste du har behov for som bileier og sjåfør.
              </Paragraph>

              <Paragraph>
                Felles for alle prosjektene vi gjennomfører med NAF er at
                brukeren står i sentrum og at det vi utvikler raskt skal få
                verdi både for medlemmer og organisasjonen.
              </Paragraph>
            </TextComponentWrapper>
          }
          keywords={[]}
          leftImg={images.first}
          rightImg={images.second}
          methodology={null}
          technology={null}
          finalText="Det har vært litt av en reise hittil som vi er stolte over å ha fått være med på. Som de sier hos NAF: «Reisen blir aldri slik man hadde tenkt», noe som gjør det til et spennende og variert oppdrag med både små og store seiere underveis."
          backgroundColor={COLOR_CLAVE_SKIN}
          textColor={COLOR_CLAVE_GREEN}
        />
      </main>
      <Footer />
    </>
  );
};

const TextComponentWrapper = styled.p``;

export default ProjectPage;
