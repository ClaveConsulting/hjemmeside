import React from 'react'
import styled from 'styled-components'
import Image from '../components/Image'
import SEO from '../components/Seo'
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors'
import ClaveLink from '../components/ClaveLink'
import Header from '../components/Header'
import Title from '../components/Title'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Forside" />
    <div style={{ height: '100vh' }}>
      <Header />
      <StyledBackgroundImage>
        <Image />
      </StyledBackgroundImage>
      <StyledOverlay />
      <StyledTextPanel>
        <Title color={COLOR_CLAVE_SKIN} bla="noe">Vi brenner for de beste løsningene.</Title>
        <ClaveLink to="/page-2/">Bli bedre kjent med oss</ClaveLink>
      </StyledTextPanel>
    </div>
    <div style={{ height: '100vh', width: '100vw', backgroundColor: COLOR_CLAVE_SKIN }}>
      <StyledFlexWrapper>
        <StyledTextPanel>
          <Title color={COLOR_CLAVE_GREEN}>Her står det forklarende hva Clave gjør</Title>
        </StyledTextPanel>
      </StyledFlexWrapper>
    </div>
  </Layout>
)

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

const StyledOverlay = styled.div`
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  &:after{
    content: '';
    position: absolute;
    right: -15%; top: 13%;
    border-radius: 100%;
    width: 60%;
    height: 0;
    padding-bottom: 60%;
    box-shadow: 0 0 0 2000px ${COLOR_CLAVE_GREEN};
  }
`

export default IndexPage
