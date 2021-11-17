import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import MidSplitLayout from '../components/RecruitmentPages/MidSplitLayout';
import RecruitmentTemplate from '../components/RecruitmentPages/RecruitmentTemplate';
import { Ingress } from '../components/Ingress';


const positions = [
  {
    text: "Deltids- og sommerjobb som UX-designer",
    active: false,
    url: "https://www.poption.com/companies/clave/postings/08Of7G"
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
      pia: file(relativePath: { eq: "190920_Clave_lowres_7.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <RecruitmentTemplate
      positions={positions}
      title="Jobbe som designer"
    >
      <Layout>
        <h1>Jobbe som designer</h1>
        <Ingress>
          I Clave mener vi at de beste løsningene blir til ved god dialog og med 
          folk som brenner for faget sitt. Vi skal derfor ikke bare levere 
          tjenester innen systemutvikling og brukeropplevelse, men nøkkelpersoner 
          med et stort hjerte for faget og kundenes forretning.
        </Ingress>
      </Layout>
      <MidSplitLayout image={images.pia}>
        <h2>Kan dette være deg?</h2>
        <p>
          Vi i Clave liker folk som legger sjelen sin i å utforske, analysere og forstå. Og ikke er fremmed for å hoppe ut i ukjent farvann med hodet først. Å visualisere nye konsepter er ingen sak for deg, og du presenterer gjerne for kunden med stor entusiasme.
        </p>
        <p>
          Vi ser etter deg som kan identifisere og analysere brukerbehov og krav. 
          Med høy entusiasme utvikler og visualiserer konsepter. 
          Er god på å planlegge, gjennomføre og presentere brukertester. 
          Evaluere utviklet funksjonalitet og sørge for at det er kvalitet våre leveranser
        </p>
        <p>
          Det skader ikke om du også:
          <List>
            <li>brenner for å videreutvikle deg</li>
            <li>trives i et sosialt arbeidsmiljø og kommuniserer godt med andre</li>
            <li>er selvgående og har viljen til å stå opp for det du oppriktig tror er best</li>
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