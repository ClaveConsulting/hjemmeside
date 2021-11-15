import React from 'react';
import Layout, { ColorContext, Container } from '../components/Layout';
import styled from 'styled-components';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import { onDesktop, onMobile } from './Breakpoints';

import { ProjectGallery } from './ProjectGallery';
import Footer from './Footer';

const PADDING_TOP_DESKTOP = '6rem';
const PADDING_TOP_MOBILE = '4.75rem';

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
    textColor } = props;

  const TitleWrapper = styled.div`
    background-color: ${backgroundColor};
    ${onDesktop(`
      padding-top: ${PADDING_TOP_DESKTOP};
    `)} 
    ${onMobile(`
      padding-top: ${PADDING_TOP_MOBILE};
    `)};
  `;

  return (
    <ColorContext.Provider
      value={{
        backgroundColor,
        textColor,
      }}
    >
      <main>
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
        <Layout>
          <Ingress>
            {ingress}
          </Ingress>
        </Layout>
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

  const keywordList = children.map(fact => (
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