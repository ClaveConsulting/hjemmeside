/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /ScrollMagic/,
            use: loaders.null(),
          },
          {
            test: /scrollmagic/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}