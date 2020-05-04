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
          firstImg={images.left}
          secondImg={images.right}
          title="Komplett Group"
          ingress={
            <Ingress>
            </Ingress>
          }
          body={
            <TextComponentWrapper>
            </TextComponentWrapper>
          }
          keywords={[
          ]}
          leftImg={images.first}
          rightImg={images.second}
          methodology="Scrum, Spotify Engineering Culture"
          technology="IMS SQL Server, MS .NET Core, Azure, JavaScript (React.js, AngularJS), CSS, HTML, REST, SOAP, Umbraco CMS, Confluence, Jira, Github, Jenkins CI, Octopus Deploy"
          finalText="Komplett er Nordens største netthandelsaktør. Nettbutikkene fornyes og videreutvikles kontinuerlig, og utviklingsavdelingen jobber med alle deler av Komplett-butikkens plattform og hele kundereisen på nett."
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
