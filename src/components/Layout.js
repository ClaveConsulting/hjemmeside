/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './layout.css'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1366px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
