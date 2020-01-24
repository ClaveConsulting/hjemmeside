import React from 'react';
import Form from '../components/Form/Form.js';
import styled from 'styled-components';

import Layout, { ColorContext } from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/Seo';
import Header from '../components/Header';
import { graphql, useStaticQuery } from 'gatsby';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import JoinBanner from '../components/JoinBanner';
import MyMapComponent from '../components/Map';
import { onDesktop } from '../components/Breakpoints';

const SecondPage = () => {
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
        textColor: COLOR_CLAVE_SKIN,
      }}
    >
      <>
        <main>
          <Header useSkinColoredHamburgerMenu={true} />
          <SEO title="Kontakt oss" description="" />
          <Layout>
            <h1>Kontakt oss</h1>
          </Layout>
          <Layout>
            <ContactInfo>
              <Contact1>
                <h3>Steinar</h3>
                <p>
                  Sveen CEO <br /> + 47 908 86 980 <br />
                  steinar.sveen@clave.no
                </p>
              </Contact1>
              <Contact1>
                <h3>Terje</h3>
                <p>
                  Aasgaard Salgssjef <br />+ 47 975 37 841 <br />
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
                    Øvre Slottsgate 18-20 <br />
                    0157 OSLO
                  </p>
                </AsideContentLow>
              </div>
            }
          >
            <div className="mapouter">
              <MyMapComponent />
            </div>
          </Layout>
          <Layout>
            <h2>Send oss gjerne en melding</h2>
            <p>
              Trenger du hjelp til noe, ønsker å vite mer om hvordan det er å
              jobbe hos oss eller rett og slett bare er litt nysgjerrig?
            </p>
            <Form/>
          </Layout>
          <JoinBanner images={images} dontShowLink />
        </main>

        <Footer />
      </>
    </ColorContext.Provider>
  );
};

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
