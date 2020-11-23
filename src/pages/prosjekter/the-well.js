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
      main: file(relativePath: { eq: "190920_Clave_lowres_15.jpg" }) {
        ...fluidImage
      }
      left: file(relativePath: { eq: "190920_Clave_lowres_14.jpg" }) {
        ...fluidImage
      }
      right: file(relativePath: { eq: "190920_Clave_lowres_12.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <>
      <main>
        <ProjectPageTemplate
          mainImg={images.main}
          firstImg={images.left}
          secondImg={images.right}
          title="The Well"
          ingress={
            <Ingress>
              Hos The Well jobber vi for å gjøre det enkelt å slappe av. Vi har
              fått muligheten til å jobbe med nytt design på nettsidene,
              kjøpsprosessen og ny bookingløsning.
            </Ingress>
          }
          body={
            <TextComponentWrapper>
              <Paragraph>
                Gjennom månedlige brukertester har vi lært oss å kjenne brukerne
                til The Well, og en smidig utvilingsprosess gjør at vi raskt kan
                endre de tingene som ikke fungerer til en lav kostnad. Vårt
                samarbeid med The Well startet med at vi lagde en ny
                bookingløsning som gjør det enkelt å bestille spainngang,
                behandlinger, bussbilletter og å reservere bord i restauranten.
                Løsningen fungerer veldig bra fordi den er skreddersydd til
                behovene til The Well, og omsetningen på nett har aldri vært så
                høy som nå.
              </Paragraph>

              <Paragraph>
                Vi har også satt sammen et splitter nytt design både på
                nettsidene (thewell.no) og videreutviklet bookingsløsningen i
                forbindelse med at The Well åpner et nytt hotell sommeren 2021.
                Her har vi jobbet i alle stadier av prosjektet - fra
                konseptutvikling til ferdig produkt. I 2020 har vi også utviklet
                en intern løsning for å gjøre det enkelt for de ansatte i The
                Well å håndtere alle bookinger.
              </Paragraph>

              <Paragraph>
                I løpet av prosjektet har vi vært alt fra 3 til 6 personer:
                Prosjektleder, UX-designer og utvikler fra Clave, samt utviklere
                fra Fabres i Polen.
              </Paragraph>
            </TextComponentWrapper>
          }
          keywords={[
            'Oppstart 2019',
            'Omtrent 5.000 arbeidstimer per år',
            'UX’er, front- og backend utviklere',
          ]}
          leftImg={images.first}
          rightImg={images.second}
          methodology={"Lean"}
          technology={"Teknologi .NET Core, React.js, Azure, MS SQL Server, Azure DevOps, Umbraco CMS, Kanban"}
          finalText="The Well er Nordens største spa- og velværesenter som ligger på Kolbotn. Her finner du 10,500 kvm med bassenger og forskjellige saunarom."
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
