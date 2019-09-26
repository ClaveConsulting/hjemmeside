import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min'
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
import TweenMax from 'gsap/src/minified/TweenMax.min'
import TimelineMax from 'gsap/src/minified/TimelineMax.min'
import CSSRulePlugin from 'gsap/src/minified/plugins/CSSRulePlugin.min'

import Image from '../components/Image'
import SEO from '../components/Seo'
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors'
import ClaveLink from '../components/ClaveLink'
import Header from '../components/Header'
import Title from '../components/Title'
import Layout from '../components/Layout'

import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import './index.css'

TweenMax.defaultEase = TweenMax.Linear.easeNone

// TODO: Kan CSSRulePlugin bruke id (med pseudo)?
const IndexPage = () => {
  const controller = useRef()
  const timeLineMax = useRef()

  useLayoutEffect(() => {
    controller.current = new ScrollMagic.Controller()
    timeLineMax.current = new TimelineMax({ paused: true })

    // Css er lagt ut i ekstern fil (index.css) for å kunne bruke pseudo selector på klasse herfra
    const rule = CSSRulePlugin.getRule('.overlay:after')

    const tween = TweenMax.to(rule, 100, {
      cssRule: {
        width: '360%',
        paddingBottom: '360%',
        right: '-165%',
        top: '-50%',
      },
    })

    new ScrollMagic.Scene({
      duration: 150,
    })
      .setTween(tween)
      .setPin('#frontpage')
      .addTo(controller.current)
  }, [])

  return (
    <Layout>
      <SEO title="Forside" />
      <section id="frontpage" style={{ height: '100vh', width: '100%', padding: '0rem 4rem' }}>
        <Header />
        <StyledBackgroundImage>
          <Image />
        </StyledBackgroundImage>
        <div className="overlay" />
        <StyledTextPanel>
          <Title color={COLOR_CLAVE_SKIN} bla="noe">Vi brenner for de beste løsningene.</Title>
          <ClaveLink to="/page-2/">Bli bedre kjent med oss</ClaveLink>
        </StyledTextPanel>
      </section>
      <section id="frontpage-lower" style={{ height: '100vh', padding: '0 4rem', backgroundColor: COLOR_CLAVE_SKIN }}>
        <StyledFlexWrapper>
          <StyledTextPanel>
            <Title color={COLOR_CLAVE_GREEN}>Her står det forklarende hva Clave gjør</Title>
          </StyledTextPanel>
        </StyledFlexWrapper>
      </section>
    </Layout>
  )
}

const StyledTextPanel = styled.div`
  padding-top: 10rem;
`

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  padding-left: 30%;
  width: 100%;
  z-index: -2;
  background-color: ${COLOR_CLAVE_SKIN};
`

export default IndexPage
