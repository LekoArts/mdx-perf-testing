const enableAnalytics = process.env.BUNDLE_ANALYZE === 'true'

module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby MDX Benchmark`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/generated_articles/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
    },
    enableAnalytics && `gatsby-plugin-webpack-bundle-analyser-v2`,
  ].filter(Boolean),
}
