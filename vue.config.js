const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API_BASE_URL, // Base URL from .env file
        changeOrigin: true, // Allows changing the origin header
        pathRewrite: { "^/api": "" }, // Strips '/api' when forwarding
      },
    },
  },
});
