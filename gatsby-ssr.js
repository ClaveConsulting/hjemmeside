/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: `no` })
}
