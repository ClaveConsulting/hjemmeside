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
        <Layout
            asideContent={
                <AsideContent>
                    <h3>Bestill en test</h3>
                    <p>
                        Har du en løsning som du ikke har observert at dine brukere benytter
                        seg av? Er det lenge siden du sist brukervennlighetstestet løsningen
                        din? Da kan Steffen og Irene hjelpe deg.
                    </p>
                    <CtaLink to="/">Mer om hvordan vi tester</CtaLink>
                    <AsideImg
                        src="https://placehold.it/387x279/f00000/fff"
                        width="387"
                        height="279"
                        alt="Brukertesting"
                    />
                </AsideContent>
            }
        >
            <Gallery>
                <GalleryImage
                    src="https://placehold.it/681x470/00f000/fff"
                    width="681"
                    height="470"
                    alt="Lars-Petter og Yngve"
                />
                <GalleryImage
                    src="https://placehold.it/306x368/0000f0/fff"
                    width="306"
                    height="368"
                    alt="Pekefinger"
                />
            </Gallery>
        </Layout>
        <Layout
            asideContent={
                <AsideContent>
                    <h3>Bestill en test</h3>
                    <p>
                        Har du en løsning som du ikke har observert at dine brukere benytter
                        seg av? Er det lenge siden du sist brukervennlighetstestet løsningen
                        din? Da kan Steffen og Irene hjelpe deg.
                    </p>
                    <CtaLink to="/">Mer om hvordan vi tester</CtaLink>
                    <AsideImg
                        src="https://placehold.it/387x279/f00000/fff"
                        width="387"
                        height="279"
                        alt="Brukertesting"
                    />
                </AsideContent>
            }
        >
            <Gallery>
                <GalleryImage
                    src="https://placehold.it/681x470/00f000/fff"
                    width="681"
                    height="470"
                    alt="Lars-Petter og Yngve"
                />
                <GalleryImage
                    src="https://placehold.it/306x368/0000f0/fff"
                    width="306"
                    height="368"
                    alt="Pekefinger"
                />
            </Gallery>
        </Layout>
        <Layout>
            <h2>Sjekk ut hva vi gjør hos kundene våre</h2>
            <p>
                Det er stort sett alltid flere Clavere hos en kunde, og gjerne en
                blanding av UX-designere, rådgivere og utviklere. Spa, post, nettbutikk,
                bil, offentlifg forvaltning, humanitært arbeid. Vi jobber innen mange
                ulike domener!
            </p>
        </Layout>
    </main>
);



const AsideContent = styled.div`
  padding-left: ${MOBILE_PADDING};
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
