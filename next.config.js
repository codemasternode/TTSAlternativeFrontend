const withCSS = require('@zeit/next-css')
const withImage = require('next-images')
const compose = require('next-compose')

module.exports = compose(
  [
    [
      withCSS, {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]",
        }
      }
    ],
    [
      withImage, {}
    ],
    {
      webpack(config, options) {
        return config
      }
    }
  ]
)