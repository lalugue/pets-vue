const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/pets-vue/'
      : '/pets-vue/',
      outputDir: path.resolve(__dirname, "./docs")      
  }