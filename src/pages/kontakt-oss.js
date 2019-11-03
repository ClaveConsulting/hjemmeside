import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Layout, { MOBILE_PADDING, Container } from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import CtaLink from '../components/CtaLink';
import { GalleryImage, Gallery } from '../components/Gallery';
import { Link } from 'gatsby';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import ClaveLink from '../components/ClaveLink';
import PageHeaderWithoutImage from "../components/PageHeaderWithoutImage";

const SecondPage = () => (
    <main>
        <Header />
        <SEO title="Kontakt oss" description="" />
        <PageHeaderWithoutImage
            title="Kontakt oss"
        />
        <Layout>
            <h2>Sjekk ut hva vi gjør hos kundene våre</h2>
            <p>
                Det er stort sett alltid flere Clavere hos en kunde, og gjerne en
                blanding av UX-designere, rådgivere og utviklere. Spa, post, nettbutikk,
                bil, offentlifg forvaltning, humanitært arbeid. Vi jobber innen mange
                ulike domener!
            </p>
        </Layout>
        <Layout
            asideContent={
                <AsideContent>
                    <AsideContentLow>
                        <h3>Kom innom</h3>
                        <p>
                            Øvre Slottsgate 18-20 <br/>
                            0157 OSLO
                        </p>
                    </AsideContentLow>
                </AsideContent>
            }
        >
            <div className="mapouter">
                    <iframe width="600" height="500" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=%C3%98vre%20Slottsgate%2018&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
            </div>
        </Layout>
    </main>
);


const AsideContent = styled.div`
  position: relative;
  width: 100%;
`;

const AsideContentLow = styled.div`
  padding-left: ${MOBILE_PADDING};
  position: absolute;
  bottom: 0;
  left: 0;
`;

const AsideImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Ingress = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
`;

export default SecondPage;


