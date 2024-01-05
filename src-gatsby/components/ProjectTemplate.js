import React from 'react';
import Layout, { ColorContext, Container } from './Layout';
import styled from 'styled-components';
import Seo from './Seo';
import Header from './Header';
import PageHeader from './PageHeader';

import { ProjectGallery } from './ProjectGallery';
import Footer from './Footer';

const TitleWrapper = styled.div.attrs(({ backgroundColor = "peach" }) => ({
  backgroundColor,
}))`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ProjectPageTemplate = (props) => {
  const {
    mainImg,
    firstImg,
    secondImg,
    title,
    ingress,
    keywords,
    methodology,
    technology,
    finalText,
    backgroundColor,
    textColor,
  } = props;

  return (
    <ColorContext.Provider
      value={{
        backgroundColor,
        textColor,
      }}
    >
      <main>
        <Header />
        <Seo title={title} description="" />
        <TitleWrapper backgroundColor={backgroundColor}>
          <PageHeader
            title={title}
            ingress={ingress}
            imageProps={{
              src: mainImg,
              width: 1227,
              height: 728,
            }}
          />
        </TitleWrapper>
        <BodyTextLayout
          asideContent={<ProjectKeywords>{keywords}</ProjectKeywords>}
        >
          {props.children}
        </BodyTextLayout>
        <Container>
          <Container.Content>
            <ProjectGallery
              imageSpacing={400}
              leftImg={firstImg}
              rightImg={secondImg}
              methodology={methodology}
              technology={technology}
              finalText={finalText}
            />
          </Container.Content>
        </Container>
      </main>
      <Footer />
    </ColorContext.Provider>
  );
};

export const ProjectKeywords = ({ children }) => {
  if (!children) {
    return null;
  }

  const keywordList = children.map((fact) => (
    <KeywordElement key={fact}>{fact}</KeywordElement>
  ));

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
