module.exports = {
  siteMetadata: {
    title: `luna`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://luna.flywheelsites.com/graphql"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/fonts/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/luna.svg',
    },
  },
  ]
};
