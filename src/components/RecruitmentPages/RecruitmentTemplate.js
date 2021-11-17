import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { ColorContext } from '../Layout';
import Header from '../Header';
import Footer from '../Footer';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from '../../colors';
import SEO from '../Seo';
import ClaveInfo from './ClaveInfo';
import ContactInfo from './ContactInfo';
import SearchingForBanner from './SearchingForBanner';

const RecruitmentTemplate = props => {
  const {
    positions,
    title
  } = props;

  return (
    <>
      <ColorContext.Provider
        value={{
          backgroundColor: COLOR_CLAVE_PEACH,
          textColor: COLOR_CLAVE_GREEN
        }}>
        <main>
          <Header {...props} />
          <SEO title={title} description="" />
          {props.children}
          <ClaveInfo />
          <SearchingForBanner positions={positions} />
          <ContactInfo />
        </main>
      </ColorContext.Provider>
      <ColorContext.Provider
        value={{
          backgroundColor: COLOR_CLAVE_GREEN,
          textColor: COLOR_CLAVE_PEACH
        }}
      >
        <Footer />
      </ColorContext.Provider>
    </>
  )
}
export default RecruitmentTemplate;