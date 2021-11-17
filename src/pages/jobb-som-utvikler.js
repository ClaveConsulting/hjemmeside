import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import MidSplitLayout from '../components/RecruitmentPages/MidSplitLayout';
import RecruitmentTemplate from '../components/RecruitmentPages/RecruitmentTemplate';
import { Ingress } from '../components/Ingress';


const positions = [
  {
    text: "Senior Utvikler",
    active: true,
    url: "https://www.poption.com/companies/clave/postings/wrLfxm"
  },
  {
    text: "Nyutdannede utviklere til Clave 2022",
    active: false,
    url: "https://www.poption.com/companies/clave/postings/wYDf7E"
  },
  {
    text: "Sommerjobb hos Clave 2022",
    active: false,
    url: "https://www.poption.com/companies/clave/postings/w42f2E"
  },
]


const DeveloperPage = props => {
  const images = useStaticQuery(graphql`
    query {
      yngve: file(relativePath: { eq: "190920_Clave_lowres_13.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <RecruitmentTemplate
      positions={positions}
      title="Jobbe som utvikler"
    >
      <Layout>
        <h1>Jobbe som utvikler</h1>
        <Ingress>
          I Clave leverer vi ikke bare tjenester innen systemutvikling og brukeropplevelse,
          men folk som virkelig brenner for faget sitt! Vi har en bedriftskultur som er
          tuftet på lagånd, åpenhet, og kunnskapsdeling. Det er dette vi kaller Claveånden.
        </Ingress>
      </Layout>
      <MidSplitLayout image={images.yngve}>
        <h2>Kan dette være deg?</h2>
        <p>
          I Clave liker vi folk som har et brennende engasjement for jobben de gjør
          og som ikke er redd for å gi det lille ekstra. Utviklere som
          har erfaring med frontend eller backend-utvikling med Java eller
          .NET passer godt inn hos oss. Vi liker at du er med å diskuterer ulike tilnærminger,
          og så sammen komme frem til den optimale løsningen.
        </p>
        <p>
          Det skader ikke om du også:
          <List>
            <li>engasjeres av teknologi og ønsker å utvikle deg selv og dine kolleger</li>
            <li>trives i et sosialt arbeidsmiljø og kommuniserer godt med andre</li>
            <li>er selvgående og har viljen til å stå opp for det du oppriktig tror er best</li>
            <li>har relevant utdannelse fra universitet eller høgskole</li>
          </List>
        </p>
      </MidSplitLayout>
    </RecruitmentTemplate>
  )
}

const List = styled.ul`
  margin: 20px 40px;
`

export default DeveloperPage;