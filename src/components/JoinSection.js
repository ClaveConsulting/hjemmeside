import React from 'react';
import styled from 'styled-components';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_LIGHTBLUE } from '../colors';
import Layout from './Layout';
import { Gallery, GalleryImage } from './Gallery';
import { ArrowLink } from './ClaveLink';
import { Link } from 'gatsby';

const JoinSection = ({ images }) => {
  const AsideContent = () => {
    return (
      <AsideDiv>
        <h2>Bli en av oss!</h2>
        <ArrowLink showOnMobile to="/jobb-som-utvikler">Jobbe som utvikler</ArrowLink>
        <PaddedP>
          Som utvikler i Clave får du jobbe med det siste nye innen teknologi. <PLink to="/jobb-som-utvikler">Det kan du lese mer om her og se våre ledige stillinger.</PLink>
        </PaddedP>
        <ArrowLink showOnMobile to="/jobb-som-designer">Jobbe som designer</ArrowLink>
        <PaddedP>
          Nysgjerrig på hvordan det er å jobbe som designer i Clave? <PLink to="/jobb-som-designer">Les om det her og se ledige stillinger</PLink>
        </PaddedP>
      </AsideDiv>
    )
  }

  return (
    <Layout
      asideContent={
        AsideContent()
      }
    >
      <GalleryWrapper>
        <Gallery>
          <GalleryImage
            alt="Anniken"
            width="406"
            height="206"
            fluidImage={images.anniken}
          />
          <GalleryImage
            alt="Karine"
            width="192"
            height="261"
            fluidImage={images.karine}
          />
        </Gallery>
      </GalleryWrapper>
    </Layout>
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  max-width: 600px;
  height: 100%;
  width: 100%;
  align-items: center;
  margin: auto;
`

const AsideDiv = styled.div`
  background-color: ${COLOR_CLAVE_LIGHTBLUE};
  padding: 96px 80% 96px 143px;
  margin: 0 -110% 0 -96px;
`

const PaddedP = styled.p`
  padding-top: 0.75rem;
` 

const PLink = styled(Link)`
  color: ${COLOR_CLAVE_GREEN};
  text-decoration: underline;
  font-size: 1.5rem;
  line-height: 2.0625rem;
  cursor: pointer;
`

export default JoinSection;