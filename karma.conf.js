// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-webpack'),
      require('karma-coverage'),
      require('karma-remap-istanbul'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter'),
      require('karma-remap-coverage')
    ],
    files: [
      '../app/**/*.ts',
      '../tests/*.ts'
    ],

    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    angularCli: {
      environment: 'dev'
    },

    reporters: ['progress', 'kjhtml', 'coverage', 'remap-coverage'],


    preprocessors: {
      'app/**/!(*.spec).ts': ['coverage', 'sourcemap']
    },

    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
