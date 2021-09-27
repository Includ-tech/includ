
module.exports ={
  distDir: "../../dist/client",
  images:{
    domains:["http://localhost:3000"]
  },
  webpack:  (config, { isServer }) => {
    console.log('isServer',isServer)
      if (isServer) {
      require('./generateSiteMap') 
      }
  
      return config
    }
}
