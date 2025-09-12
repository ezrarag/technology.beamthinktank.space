const path = require('path');

module.exports = function override(config, env) {
  // Add alias to resolve unframer to our polyfill
  config.resolve.alias = {
    ...config.resolve.alias,
    'unframer': path.resolve(__dirname, 'src/unframer-polyfill.js')
  };
  
  // Disable ESLint during development to avoid conflicts
  if (env === 'development') {
    config.plugins = config.plugins.filter(
      plugin => plugin.constructor.name !== 'ESLintWebpackPlugin'
    );
  }
  
  return config;
};
