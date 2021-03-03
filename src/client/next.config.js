module.exports = {
    distDir: "../../dist/client",
    webpack: (config, { isServer }) => {
        if (isServer) {
          require('./generateSiteMap')
        }
    
        return config
      }
};