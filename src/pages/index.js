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
import Layout from '../components/Layout';

import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import './index.css';

TweenMax.defaultEase = TweenMax.Linear.easeNone;

const IndexPage = () => {
  const controller = useRef();

  useLayoutEffect(() => {
    controller.current = new ScrollMagic.Controller();

    // Css er lagt ut i ekstern fil (index.css) for å kunne bruke pseudo selector på klasse herfra
    const rule = CSSRulePlugin.getRule('.overlayWithCircle:after');

    const tweenScroll = TweenMax.to(rule, 1, {
      cssRule: {
        width: '360%',
        paddingBottom: '360%',
        right: '-165%',
        top: '-50%',
      },
    });
    const tweenColor = TweenMax.to('.animateSkinToGreenText', 1, {
      color: COLOR_CLAVE_GREEN
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

  const frontPageTextFirstParagraph = <>Vi har ulik bakgrunn og erfaring. Når vi kombinerer det vi kan, og tenker sammen
    blir de beste løsningene
    til.</>;

  const frontPageTextSecondParagraph = <>Vi jobber i prosjekter og initiativer innen teknologi og innovasjon ute hos kunder. Her sitter vi gjerne over tid. </>;
  const frontPageTextThirdParagraph = <>Av og til har vi også med oss utviklere og testere fra selskapet vi har etablert i Polen. </>;

  return (
    <Layout>
      <SEO title="Forside" />
      <StyledFirstSection id="frontpage-first-section">
        <Header textClassName="animateSkinToGreenText" />
        <StyledBackgroundImage>
          <Image />
        </StyledBackgroundImage>
        <div className="overlayWithCircle" />
        <StyledTextPanel>
          <Title color={COLOR_CLAVE_SKIN} className="animateSkinToGreenText">
            {frontPageTextFirstParagraph}
          </Title>
          <div>
            <ClaveLink className="animateSkinToGreenText" to="/page-2/">
              Bli bedre kjent med oss
            </ClaveLink>
          </div>
        </StyledTextPanel>
      </StyledFirstSection>
      <StyledSecondSection>
        <StyledFlexWrapper>
          <StyledTextPanel>
            <Title color={COLOR_CLAVE_GREEN}>{frontPageTextSecondParagraph}</Title>
            <Title color={COLOR_CLAVE_GREEN}>{frontPageTextThirdParagraph}</Title>
          </StyledTextPanel>
        </StyledFlexWrapper>
      </StyledSecondSection>;
    </Layout>
  )
    ;
};

const StyledFirstSection = styled.section`
  height: 100vh; 
  width: 100%; 
  padding: 0 1.5rem;
`;

const StyledSecondSection = styled.section`
  height: 100vh; 
  padding: 0 1.5rem; 
  background-color: ${COLOR_CLAVE_SKIN};
`;

const StyledTextPanel = styled.div`
  padding-top: 10%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export default IndexPage;
