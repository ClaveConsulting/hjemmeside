import React from 'react';
import styled from 'styled-components';

import Layout, { ColorContext } from '../components/Layout';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Header from '../components/Header';
import { graphql, useStaticQuery } from 'gatsby';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from '../colors';
import MyMapComponent from '../components/Map';
import {onDesktop, onMobile} from '../components/Breakpoints';
import JoinSection from '../components/JoinSection.js';

const PADDING_TOP_DESKTOP = '6rem';
const PADDING_TOP_MOBILE = '4.75rem';

const SecondPage = props => {
  const images = useStaticQuery(graphql`
    query {
      karine: file(relativePath: { eq: "190920_Clave_lowres_5.jpg" }) {
        ...fluidImage
      }
      anniken: file(relativePath: { eq: "190920_Clave_lowres_12.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <ColorContext.Provider
      value={{
        backgroundColor: COLOR_CLAVE_GREEN,
        textColor: COLOR_CLAVE_PEACH,
      }}
    >
      <>
        <main>
          <Header {...props} useSkinColoredHamburgerMenu={true} />
          <Seo title="Kontakt oss" description="" />
          <Layout>
            <TitleWrapper>
              <h1>Kontakt oss</h1>
            </TitleWrapper>
          </Layout>
          <Layout>
            <ContactInfo>
              <Contact1>
                <h3>Steinar</h3>
                <p>
                  Sveen | CEO <br /> + 47 908 86 980 <br />
                  steinar.sveen@clave.no
                </p>
              </Contact1>
              <Contact1>
                <h3>Terje</h3>
                <p>
                  Aasgaard | Salgssjef <br />+ 47 975 37 841 <br />
                  terje.aasgaard@clave.no
                </p>
              </Contact1>
            </ContactInfo>
          </Layout>
          <Layout
            asideContent={
              <div>
                <AsideContentLow>
                  <h3>Kom innom</h3>
                  <p className="CustomParagraph">
                    Kongens gate 12 <br />
                    0153 OSLO
                  </p>
                </AsideContentLow>
              </div>
            }
          >
            <div className="mapouter">
              <MyMapComponent />
            </div>
          </Layout>
          <JoinSection images={images} />
        </main>

        <Footer />
      </>
    </ColorContext.Provider>
  );
};

const TitleWrapper = styled.div`
background-color: ${COLOR_CLAVE_GREEN};
    ${onDesktop(`
  padding-top: ${PADDING_TOP_DESKTOP};
  
  `)}
      ${onMobile(`
  padding-top: ${PADDING_TOP_MOBILE};
  `)}
`;

const AsideContentLow = styled.span`
  display: inline-block;
  align-self: flex-end;
`;

const ContactInfo = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  padding-left: 0;

  ${onDesktop(`
  flex-direction: row;
`)}
`;

const Contact1 = styled.div`
  ${onDesktop(`
    flex: 1 1 50%;
    padding: 1rem 0rem 0rem;
  `)}
`;

export default SecondPage;
