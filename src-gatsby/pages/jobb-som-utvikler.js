import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import MidSplitLayout from '../components/RecruitmentPages/MidSplitLayout';
import RecruitmentTemplate from '../components/RecruitmentPages/RecruitmentTemplate';
import { Ingress } from '../components/Ingress';

const positions = [
  {
    text: 'Senior Utvikler',
    active: true,
    url: 'https://clave.homerun.co/senior-full-stack-developer-2/no',
  },
];

const DeveloperPage = (props) => {
  const images = useStaticQuery(graphql`
    query {
      yngve: file(relativePath: { eq: "190920_Clave_lowres_13.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <RecruitmentTemplate positions={positions} title="Jobbe som utvikler">
      <Layout>
        <h1>Jobbe som utvikler</h1>
        <Ingress>
          Kjernen i alt vi driver med er folk som brenner for faget sitt og som
          er i kontinuerlig faglig utvikling. Clave ønsker å levere det beste
          innen systemutvikling, og mener at veien dit er en bedriftskultur som
          er tuftet på lagånd, åpenhet og kunnskapsdeling.
        </Ingress>
      </Layout>
      <MidSplitLayout image={images.yngve}>
        <h2>Er dette deg?</h2>
        <p>
          Er dette deg? I Clave liker vi folk som har et stort engasjement for
          jobben de gjør og som ønsker å gi det lille ekstra. Utviklere som har
          erfaring med frontend eller backend-utvikling med Java eller .NET
          passer godt inn hos oss.
        </p>
        <p>
          Vi liker at du er i stand til å diskutere ulike forslag og slik bidra
          til at vi sammen kommer fram til de optimale løsningene.
        </p>
        <p>
          Det skader ikke om du også:
          <List>
            <li>
              engasjeres av teknologi og ønsker å utvikle deg selv og dine
              kolleger
            </li>
            <li>
              trives i et sosialt arbeidsmiljø og kommuniserer godt med andre
            </li>
            <li>
              er selvgående og har evne til å argumentere for det du mener er
              den beste løsningen
            </li>
            <li>har relevant utdannelse fra universitet eller høgskole</li>
          </List>
        </p>
      </MidSplitLayout>
    </RecruitmentTemplate>
  );
};

const List = styled.ul`
  margin: 20px 40px;
`;

export default DeveloperPage;
