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
        <Layout>
            <h1>Kontakt oss</h1>
        </Layout>
        <Layout>
            <CustomTable>
                <tr>
                    <NoBorder><h2>Steinar</h2></NoBorder>
                    <NoBorder><h2>Terje</h2></NoBorder>
                </tr>
                <tr>
                    <NoBorder>
                        Sveen SEO <br/>
                        + 47 908 86 980 <br/>
                        steinar.sveen@clave.no
                    </NoBorder>
                    <NoBorder>
                        Aasgard Salgssjef <br/>
                        + 47 975 37 841 <br/>
                        terje.aasgard@clave.no
                    </NoBorder>
                </tr>
            </CustomTable>
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
        <Layout>
            <h2>Send oss gjerne en melding</h2>
            <CustomInput placeholder="Navn" type="text"></CustomInput><br/>
            <CustomInput placeholder="Epost" type="text"></CustomInput><br/>
            <CustomInput placeholder="Melding" type="text"></CustomInput><br/>
        </Layout>
    </main>
);

const CustomTable = styled.table`
    style='border-collapse: collapse;'
`;


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

const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #CCC;
  color: 005550;
  box-sizing: border-box;
  font-family: 'Arvo';
  font-size: 18px;
  height: 50px;
  padding: 10px 0px;
  position: relative;
  top: 50%;
  width: 100%;
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

const NoBorder = styled.td`
    border:0;
`;

export default SecondPage;



