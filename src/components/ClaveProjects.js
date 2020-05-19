import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Project, Projects } from './../components/ProjectList';

const ClaveProjects = () => {
  const images = useStaticQuery(graphql`
    query {
      komplett: file(relativePath: { eq: "190920_Clave_lowres_8.jpg" }) {
        ...fluidImage
      }
      rodekors: file(relativePath: { eq: "190920_Clave_lowres_5_crop.jpg" }) {
        ...fluidImage
      }
      posten: file(relativePath: { eq: "190920_Clave_lowres_7_crop.jpg" }) {
        ...fluidImage
      }
      thewell: file(relativePath: { eq: "190920_Clave_lowres_12_crop.jpg" }) {
        ...fluidImage
      }
      toll: file(relativePath: { eq: "190920_Clave_lowres_3_crop.jpg" }) {
        ...fluidImage
      }
      naf: file(relativePath: { eq: "190920_Clave_lowres_13.jpg" }) {
        ...fluidImage
      }
      eika: file(relativePath: { eq: "190920_Clave_lowres_1_crop.jpg" }) {
        ...fluidImage
      }
    }
  `);
  return (
    <Projects>
      <Project
        title="Posten"
        link="/prosjekter/posten"
      />
      <Project
        title="Røde Kors"
        link="/prosjekter/rode-kors"
      />
      <Project
        title="The Well"
        link="/prosjekter/the-well"
      />
      <Project
        title="Toll"
        link="/prosjekter/toll"
      />
      <Project
        title="NAF"
        link="/prosjekter/naf"
      />
      <Project
        title="Statens Pensjonskasse"
        link="/prosjekter/statens-pensjonskasse"
      />
      <Project
        title="Statens Vegvesen"
        link="/prosjekter/statens-vegvesen"
      />
      <Project
        title="Eika"
        link="/prosjekter/eika"
      />
    </Projects>
  );
};

export default ClaveProjects;
