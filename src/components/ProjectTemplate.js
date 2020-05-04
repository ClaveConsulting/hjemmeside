import React from 'react';
import Layout, { ColorContext } from '../components/Layout';
import styled from 'styled-components';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import { onDesktop, onMobile } from './Breakpoints';

import { ProjectGallery } from './ProjectGallery';

const PADDING_TOP_DESKTOP = '6rem';
const PADDING_TOP_MOBILE = '4.75rem';

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
  const TitleWrapper = styled.div`
    background-color: ${backgroundColor};
    ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  `)} ${onMobile(`
  padding-top: ${PADDING_TOP_MOBILE};
  `)};
  `;

  return (
    <ProjectPageContainer>
      <Header />
      <SEO title={title} description="" />
      <TitleWrapper>
        <PageHeader
          title={title}
          imageProps={{
            fluidImage: mainImg,
            width: 1227,
            height: 728,
          }}
        />
      </TitleWrapper>
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

  if (keywordList.length === 0) {
    return null;
  }

  return (
    <KeywordComponent>
      <KeywordHeader>Prosjektfakta</KeywordHeader>
      {keywordList}
    </KeywordComponent>
  );
};

const BodyTextLayout = styled(Layout)`
  padding-bottom: 2rem;
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
  margin-left: 4rem;
  width: 13rem;
`;

export const Ingress = styled.p`
  font-size: 2rem;
  line-height: 1.5;
`;

export const Paragraph = styled.p``;
