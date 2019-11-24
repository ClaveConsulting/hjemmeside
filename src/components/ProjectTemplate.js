import React from 'react';
import Layout, { ColorContext } from '../components/Layout';
import styled from 'styled-components';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

import { ProjectGallery } from './ProjectGallery';

export const ProjectPageTemplate = ({
  mainImg,
  firstImg,
  secondImg,
  title,
  ingress,
  body,
  keywords,
  methodology,
  technology,
  finalText,
  backgroundColor,
  textColor,
}) => {
  return (
    <ProjectPageContainer>
      <Header />
      <SEO title={title} description="" />
      <PageHeader
        title={title}
        imageProps={{
          fluidImage: mainImg,
          width: 1227,
          height: 728,
        }}
      />
      <ColorContext.Provider
        value={{
          backgroundColor,
          textColor,
        }}
      >
        <Layout>{ingress}</Layout>
        <BodyTextLayout
          asideContent={<ProjectKeywords>{keywords}</ProjectKeywords>}
        >
          {body}
        </BodyTextLayout>
        <ProjectGallery
          imageSpacing={400}
          leftImg={firstImg}
          rightImg={secondImg}
          methodology={methodology}
          technology={technology}
          finalText={finalText}
        />
      </ColorContext.Provider>
    </ProjectPageContainer>
  );
};

export const ProjectKeywords = ({ children }) => {
  const keywordList = children.map(fact => (
    <KeywordElement>{fact}</KeywordElement>
  ));
  return (
    <KeywordComponent>
      <KeywordHeader>Prosjektfakta</KeywordHeader>
      {keywordList}
    </KeywordComponent>
  );
};

const BodyTextLayout = styled(Layout)`
  padding-bottom: 2em;
`;

const ProjectPageContainer = styled.div``;

const KeywordElement = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const KeywordHeader = styled.h2`
  font-size: 24px;
  line-height: 1.5;
`;

const KeywordComponent = styled.div`
  margin-left: 64px;
  width: 13em;
`;

export const Ingress = styled.p`
  font-size: 24px;
  line-height: 1.5;
`;

export const Paragraph = styled.p``;
