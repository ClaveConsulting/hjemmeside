/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

function Seo({ description, title, children }) {
  const { site } = {}

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
      <>
        <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        {children}
      </>
  )
}

Seo.defaultProps = {
  description: ``,
}

export default Seo
