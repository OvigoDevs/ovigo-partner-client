const configNext = {
  env: {
    BackendHost: "http://localhost:8080",
    FrontendHost: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      }
    ],
    
  },
};

module.exports = configNext;
