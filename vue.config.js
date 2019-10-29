var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {  
    configureWebpack: {
        plugins: [
            // new HardSourceWebpackPlugin()
        ]
    },
    outputDir: 'docs',
  assetsDir: './',
  publicPath: './'
}