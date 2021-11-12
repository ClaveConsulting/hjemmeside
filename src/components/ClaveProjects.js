import React from 'react';
import { Project, Projects } from './../components/ProjectList';

const ClaveProjects = () => {
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
