/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BackendHost: "http://localhost:8080",
    FrontendHost: "http://localhost:3000",
  },
};

module.exports = nextConfig;
