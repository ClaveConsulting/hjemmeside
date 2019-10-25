import React from 'react';
import styled from 'styled-components';
import { ProjectPageTemplate } from './../../components/ProjectTemplate';

const ProjectPage = () => {
  return (
    <main>
      <ProjectPageTemplate
        title="Komplett Group"
        ingress={
          <TextComponentWrapper>
            Sammen med Komplett jobbet vi mot å skape smarte og smilende
            løsninger som gjør livet lettere både for brukerne og de som jobbet
            i Komplett. Fordi vi var folk med mange ulike bakgrunner som tenkte
            sammen og utfylte hverandre, kunne vi skape entusiasme.
          </TextComponentWrapper>
        }
      />
    </main>
  );
};

const TextComponentWrapper = styled.div``;

export default ProjectPage;
