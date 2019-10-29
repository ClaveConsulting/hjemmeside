import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import TweenMax from 'gsap/src/minified/TweenMax.min';
import TimelineMax from 'gsap/src/minified/TimelineMax.min';
import CSSRulePlugin from 'gsap/src/minified/plugins/CSSRulePlugin.min';

import Image from '../components/Image';
import SEO from '../components/Seo';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors';
import ClaveLink from '../components/ClaveLink';
import Header from '../components/Header';
import Title from '../components/Title';
import Layout, { onDesktop } from '../components/Layout';

import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import './index.css';
import JoinBanner from '../components/JoinBanner';
import CtaLink from '../components/CtaLink';
import { useStaticQuery, graphql } from 'gatsby';

TweenMax.defaultEase = TweenMax.Linear.easeNone;

const IndexPage = () => {
  const controller = useRef();

  useLayoutEffect(() => {
    controller.current = new ScrollMagic.Controller();

    // Css er lagt ut i ekstern fil (index.css) for å kunne bruke pseudo selector på klasse herfra
    const rule = CSSRulePlugin.getRule('.overlayWithCircle:after');

    const tweenScroll = TweenMax.to(rule, 1, {
      cssRule: {
        transform: window.innerWidth < 720 ? 'scale(6)' : 'scale(3.1)'
      },
    });
    const tweenColor = TweenMax.to('.animateSkinToGreenText', 1, {
      color: COLOR_CLAVE_GREEN,
    });

    const timelineMax = new TimelineMax();
    timelineMax.add(tweenColor, 'use-same-label-to-run-at-same-time');
    timelineMax.add(tweenScroll, 'use-same-label-to-run-at-same-time');

    new ScrollMagic.Scene({
      duration: 300,
    })
      .setTween(timelineMax)
      .setPin('#frontpage-first-section')
      .addTo(controller.current);
  }, []);

  const images = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "190920_Clave_lowres_18_cropped.jpg" }) {
        ...fluidImage
      }
      karine: file(relativePath: { eq: "190920_Clave_lowres_5.jpg" }) {
        ...fluidImage
      }
      anniken: file(relativePath: { eq: "190920_Clave_lowres_12.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <main>
      <SEO title="Forside" />
      <StyledFirstSection id="frontpage-first-section">
        <Header textClassName="animateSkinToGreenText" frontPage />
        <StyledBackgroundImage>
          <Image fluidImage={images.header} />
        </StyledBackgroundImage>
        <div className="overlayWithCircle" />
        <StyledTextPanel>
          <Title color={COLOR_CLAVE_SKIN} className="animateSkinToGreenText">
            De beste løsningene krever de beste folkene.
          </Title>
          <div>
            <FrontPageLink className="animateSkinToGreenText" to="/page-2/">
              Bli bedre kjent med oss
            </FrontPageLink>
          </div>
        </StyledTextPanel>
      </StyledFirstSection>
      <Layout>
        <p>
          Vi jobber i prosjekter og initiativer innen teknologi og innovasjon og
          ute hos kunder. Her sitter vi gjerne over tid.
        </p>
        <p>
          Av og til får vi også med oss utviklere og testere i selskapet vi har
          etablert i Polen.
        </p>
        <CtaLink to="/hva-vi-gjor">Se mer om hva vi gjør</CtaLink>
      </Layout>
      <JoinBanner images={images} />
    </main>
  );
};

const StyledFirstSection = styled.section`
  height: 100vh;
  width: 100%;

  padding: 0 1rem;

  ${onDesktop(`
    padding: 0 1.5rem;
  `)}
`;

const StyledTextPanel = styled.div`
  padding-top: 10%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  @media only screen and (max-width: 480px) {
    width: 80%
  }
`;

const FrontPageLink = styled(ClaveLink)`
  color: ${COLOR_CLAVE_SKIN};
`;

const StyledBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  padding-left: 30%;
  width: 100%;
  z-index: -2;
  background-color: ${COLOR_CLAVE_SKIN};
    @media only screen and (max-width: 480px) {
    padding-top: 120%;
    }
`;

export default IndexPage;
