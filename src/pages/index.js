import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/Seo'
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_SKIN } from '../colors'
import ClaveLink from '../components/ClaveLink'

const IndexPage = () => (
  <Layout>
    <SEO title="Forside" />
    <BackgroundImage>
      <Image />
    </BackgroundImage>
    <Overlay />
    <Grid>
      <LeftPanel>
        <Title>Vi brenner for de beste løsningene.</Title>
      </LeftPanel>
      <RightPanel />
    </Grid>
    <ClaveLink to="/page-2/">Bli bedre kjent med oss</ClaveLink>
  </Layout>
)


const Grid = styled.div`
  display: flex;
  justify-content: end;
`

const LeftPanel = styled.div`
  width: 60%;
  padding-top: 10rem;
`

const RightPanel = styled.div`
  width: 40%;
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  padding-left: 30%;
  width: 100%;
  z-index: -2;
  background-color: ${COLOR_CLAVE_SKIN};
`

const Overlay = styled.div`
  position: absolute;
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

const Title = styled.h1`
  color: ${COLOR_CLAVE_SKIN};
`
export default IndexPage
