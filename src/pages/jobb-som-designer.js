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
        Vi omskaper gode ideer til fungerende løsninger ved hjelp av dialog, faglig tyngde og grundige designprosesser. 
        Gjennom å lage intuitive og tiltalende designløsninger forener vi brukernes behov med kundenes ønsker. 
        Det er viktig for Clave at vi leverer nøkkelpersoner med stort hjerte for faget og kundenes virksomhet.
        </Ingress>
      </Layout>
      <MidSplitLayout image={images.pia}>
        <h2>Er dette deg?</h2>
        <p>
          Vi i Clave liker folk som legger sjelen sin i å utforske, analysere og forstå, og som ikke er fremmed for å hoppe ut i ukjent farvann. 
        Å visualisere nye konsepter er ingen sak for deg, og du finner stor glede i å videreutvikle disse konseptene sammen med utviklere og kunder.
        </p>
        <p>
        Vi ser etter deg som kan identifisere og analysere brukerbehov og krav. Du er god på å planlegge, gjennomføre og presentere brukerinnsikt. 
        Samtidig er du i stand til å evaluere utviklet funksjonalitet og sørge for at leveransene våre har god kvalitet.
        </p>
        <p>
          Det skader ikke om du også:
          <List>
            <li>syns faglig utvikling er viktig</li>
            <li>trives i et sosialt arbeidsmiljø og kommuniserer godt med andre</li>
            <li>er selvgående og har evne til å stå for det du mener er den beste løsningen på faglige utfordringer</li>
          </List>
        </p>
      </MidSplitLayout>
  <h2>Hos oss i Clave</h2>
        <p>
        Det er veldig viktig for oss at alle skal oppleve et godt arbeidsmiljø og stor takhøyde. Dessuten har vi det morsomt på jobb! 
          Gjennom tverrfaglig samarbeid blir vi sterke i møtet med faglige utfordringer, og utvikler oss både som fagpersoner og kollegaer.
        </p>
        <p>
        Lagånd, positivitet og omsorg for kollegaene våre gjør oss trygge på hverandre og på jobben vi gjør. 
        I Clave tror vi det er oppskriften på å lage de aller beste løsningene.
        </p>
        <p>
          Vi jobber i spennende og varierte prosjekter ute hos kundene våre, og du kan selv påvirke hva du vil jobbe med og i hvilken retning du ønsker å utvikle deg. 
          Lederskap basert på tillit til de ansatte står sentralt, og det er en selvfølge at du får mulighet til å påvirke din egen arbeidshverdag.
        </p>
         <p>
          Clave tilbyr konkurransedyktige betingelser, og et aksjeprogram med mulighet til å bli medeier. 
          Og viktigst av alt: Et inkluderende og hyggelig arbeidsmiljø med ydmyke og flinke kolleger.
        </p>
    </RecruitmentTemplate>
  )
}

const List = styled.ul`
  margin: 20px 40px;
`

export default DeveloperPage;
