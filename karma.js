module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: [ 'jasmine' ],

    files: [
      'test_bundle.js'
    ],

    reporters: ['spec', 'failed'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    captureTimeout: 60000,

    singleRun: false
  });
};
