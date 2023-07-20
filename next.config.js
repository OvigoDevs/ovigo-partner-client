const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  env: {
    BackendHost: "http://localhost:8080",
    FrontendHost: "http://localhost:3000",
  },
  images: {
    domains: ['i.ibb.co'],
  },
});
