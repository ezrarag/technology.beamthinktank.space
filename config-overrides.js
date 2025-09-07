const path = require('path');

module.exports = function override(config, env) {
  // Add alias to resolve react-dom to our polyfill for unframer
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': path.resolve(__dirname, 'src/react-dom-polyfill.js'),
    'unframer': path.resolve(__dirname, 'src/unframer-polyfill.js')
  };
  
  return config;
};
