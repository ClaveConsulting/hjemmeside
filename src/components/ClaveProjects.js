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
        title="NAF"
        link="/prosjekter/naf"
      />
      <Project
        title="The Well"
        link="/prosjekter/the-well"
      />
      <Project
        title="Komplett"
        link="/prosjekter/komplett"
      />

    </Projects>
  );
};

export default ClaveProjects;
