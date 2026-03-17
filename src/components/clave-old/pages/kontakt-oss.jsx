import React from "react";
import Form from "../components/Form/Form";

import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from "../colors";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JoinSection from "../components/JoinSection";
import Layout, { ColorContext } from "../components/Layout";
import Map from "../components/Map";
import "./kontakt-oss.css";

const KontaktOssPage = (props) => {
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
          <Layout>
            <div className="title-wrapper">
              <h1>Kontakt oss</h1>
            </div>
          </Layout>
          <Layout>
            <div className="contact-info">
              <div className="contact-card">
                <h3>Terje</h3>
                <p>
                  Aasgaard | CEO <br />
                  +47 975 37 841 <br />
                  terje.aasgaard@clave.no
                </p>
              </div>
              <div className="contact-card">
                <h3>Karine</h3>
                <p>
                  Småstuen | COO <br />
                  +47 913 23 235 <br />
                  karine.smastuen@clave.no
                </p>
              </div>
              <div className="contact-card">
                <h3>Inga</h3>
                <p>
                  Godø | CCO <br />
                  +47 401 05 730 <br />
                  inga.godo@clave.no
                </p>
              </div>
            </div>
          </Layout>
          <Layout
            asideContent={
              <div>
                <span className="aside-content-low">
                  <h3>Kom innom</h3>
                  <address className="address">
                    Kongens gate 12
                    <br />
                    0153 OSLO
                    <br />
                  </address>
                </span>
              </div>
            }
          >
            <div className="mapouter">
              <Map />
            </div>
          </Layout>
          <Layout>
            <h2>Send oss gjerne en melding</h2>
            <p>
              Trenger du hjelp til noe, ønsker å vite mer om hvordan det er å
              jobbe hos oss eller rett og slett bare er litt nysgjerrig?
            </p>
            <Form />
          </Layout>
          <JoinSection />
        </main>

        <Footer />
      </>
    </ColorContext.Provider>
  );
};

export default KontaktOssPage;
