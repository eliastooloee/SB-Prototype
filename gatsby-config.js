module.exports = {
  siteMetadata: {
    title: "Starbucks Prototype",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
