const { resolve } = require('path')

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    files: [resolve(__dirname, 'tmp/spec_bundle.js')],
    frameworks: ['jasmine'],
    autoWatch: true,
    singleRun: false
  });
};
