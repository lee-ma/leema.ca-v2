module.exports = {
  siteMetadata: {
    title: 'Lee Ma',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128636357-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        sampleRate: 5,
        siteSpeedSampleRate: 10
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/util/typography.js`
      }
    },
  ],
}
