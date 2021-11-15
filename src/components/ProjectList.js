import React from 'react';
import styled from 'styled-components';
import { onDesktop } from '../components/Breakpoints';
import {
  COLOR_CLAVE_GREEN,
  COLOR_CLAVE_MUSTARD,
} from '../colors';
import ClaveLink from './ClaveLink';

export const Projects = () => {
  return (
    <ProjectList>
      <h2>Sjekk ut hva vi gjør hos kundene våre</h2>
      <p>Det er stort sett alltid flere Clavere ute hos de forskjellige kundene våre, og gjerne en blanding av UX-designere, 
        prosjektledere og utviklere. Vi jobber innenfor mange ulike felt: Nettbutikk, spa, post, bil, offentlig forvaltning og humanitært arbeid.
      </p>
      <ProjectLink showOnMobile href={"/prosjekter/naf"}>NAF</ProjectLink>
      <ProjectLink showOnMobile href={"/prosjekter/the-well"}>The Well</ProjectLink>
      <ProjectLink showOnMobile href={"/prosjekter/komplett"}>Komplett</ProjectLink>
    </ProjectList>
  );
};

const ProjectList = styled.ul`
  margin: -70px -96px -90px -70px;
  padding: 70px 96px 120px 70px;
  list-style: none;
  flex: 1 0 auto;
  background-color: ${COLOR_CLAVE_MUSTARD}
`;

const ProjectLink = styled(ClaveLink)`
  display: flex;
  font-size: 24px;
  margin: 20px -15px -3px 0;
  
  &:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid transparent;
  }

  &:hover:after {
    content: '';
    width: 0;
    height: 0;
    margin-left: 20px;
    margin-top: -2px;
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid ${COLOR_CLAVE_GREEN};
    transform: scaleX(0.6) scaleY(0.6);
  }

  ${onDesktop(`
  font-size: 32px;

  &:hover:after {
    margin-top: 5px;
  }
  `)}
`;
