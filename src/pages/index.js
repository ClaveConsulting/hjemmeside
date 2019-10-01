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

// TODO: Kan CSSRulePlugin bruke id (med pseudo)?
const IndexPage = () => {
  const controller = useRef();

  useLayoutEffect(() => {
    controller.current = new ScrollMagic.Controller();
    const timelineMax = new TimelineMax();

    // Css er lagt ut i ekstern fil (index.css) for å kunne bruke pseudo selector på klasse herfra
    const rule = CSSRulePlugin.getRule('.overlayWithCircle:after');

    const tweenScroll = TweenMax.to(rule, 100, {
      cssRule: {
        width: '360%',
        paddingBottom: '360%',
        right: '-165%',
        top: '-50%',
      },
    });
    const tweenColor = TweenMax.to('.animateSkinToGreenText', 50, {
      color: COLOR_CLAVE_GREEN
    });

    timelineMax.add(tweenColor, 'use-same-label-to-run-at-same-time');
    timelineMax.add(tweenScroll, 'use-same-label-to-run-at-same-time');

    new ScrollMagic.Scene({
      duration: 150,
    })
      .setTween(timelineMax)
      .setPin('#frontpage-first-section')
      .addTo(controller.current);
  }, []);

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
            Vi brenner for de beste løsningene.
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
            <Title color={COLOR_CLAVE_GREEN}>Her står det forklarende hva Clave gjør</Title>
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
  padding: 0 4rem;
`;

const StyledSecondSection = styled.section`
  height: 100vh; 
  padding: 0 4rem; 
  background-color: ${COLOR_CLAVE_SKIN};
`;

const StyledTextPanel = styled.div`
  padding-top: 10%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
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
