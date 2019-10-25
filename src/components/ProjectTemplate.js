import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

export const ProjectPageTemplate = ({ title, ingress }) => {
  return (
    <main>
      <Header />
      <SEO title={title} description="" />
      <PageHeader
        title={title}
        imageProps={{
          src: 'https://placehold.it/800x600/000/fff',
          width: 800,
          height: 600,
        }}
      />
      <Layout>
        <Ingress>{ingress}</Ingress>
      </Layout>
    </main>
  );
};

const Ingress = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
`;
