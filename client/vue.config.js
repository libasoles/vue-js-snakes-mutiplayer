const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/public"),
  assetsDir: "./",
  publicPath: process.env.NODE_ENV === 'production' ? '/public' : '/'
}