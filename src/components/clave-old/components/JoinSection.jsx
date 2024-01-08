import React from 'react';
import styled from 'styled-components';
import { COLOR_CLAVE_BLUE, COLOR_CLAVE_LIGHTBLUE } from '../colors';
import Layout, { ColorContext } from './Layout';
import { Gallery, GalleryImage } from './Gallery';
import { onMobile } from './Breakpoints';
import bildeKarine from '../images/190920_Clave_lowres_5.jpg';
import bildeAnniken from '../images/190920_Clave_lowres_12.jpg';

const JoinSection = () => {
  const AsideContent = () => {
    return (
      <ColorContext.Provider value={{
        backgroundColor: COLOR_CLAVE_LIGHTBLUE,
        textColor: COLOR_CLAVE_BLUE
      }}>
        <AsideDiv>
          <h2>Bli en av oss!</h2>
          <h3>Jobbe som utvikler</h3>
          <p>
            Som utvikler i Clave får du jobbe med det siste nye innen teknologi.
            <br/><br/>
            <PLink to="/jobb-som-utvikler">Finn ut mer om det her</PLink>
          </p>
          <br/><br/>
          <h3>Jobbe som designer</h3>
          <p>
            Nysgjerrig på hvordan det er å jobbe som designer i Clave?
            <br/><br/>
            <PLink to="/jobb-som-designer">Få svaret her</PLink>
          </p>
        </AsideDiv>
      </ColorContext.Provider>
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
            src={bildeAnniken}
          />
          <GalleryImage
            alt="Karine"
            width="192"
            height="261"
            src={bildeKarine}
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
    color: ${COLOR_CLAVE_BLUE};
    padding: 96px 80% 96px 143px;
    margin: 0 -110% 0 -96px;

    ${onMobile(`
    padding: 3rem;
    margin: 3rem -3rem 0;
  `)}
`

const PLink = styled.link`
    color: ${COLOR_CLAVE_BLUE};
    text-decoration: underline;
    font-size: 1.5rem;
    line-height: 2.0625rem;
    cursor: pointer;

    ${onMobile(`
    font-size: 1.125rem;
    line-height: 1.5625rem;
  `)}
`

export default JoinSection;
