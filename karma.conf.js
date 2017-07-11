// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  const coverage = config.singleRun ? ['coverage'] : [];
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
      require('karma-remap-istanbul')
    ],
	files: [
		'../tests/*.ts'
	],
	preprocessors: { 
		'./src/tests.entry.ts': [
			'webpack',
			'sourcemap',
		  ],
		'./src/**/!(*.test|tests.*).(ts|js)': [
			'sourcemap',
		],
	},

    webpack: {
	  
	  entry: './src/tests.entry.ts',
	  devtool: 'inline-source-map',
	  resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
	  },
	  module: {
		rules:
		  combinedLoaders().concat(
			config.singleRun
			  ? [ loaders.istanbulInstrumenter ]
			  : [ ]),
	  },
	  stats: { colors: true, reasons: true },
	},
	webpackServer: {
	  noInfo: true, // prevent console spamming when running in Karma!
	},

    reporters: ['spec']
	  .concat(coverage)
	  .concat(coverage.length > 0 ? ['karma-remap-istanbul'] : []),

	remapIstanbulReporter: {
	  src: 'coverage/chrome/coverage-final.json',
	  reports: {
		html: 'coverage',
	  },
	},

	coverageReporter: {
	  reporters: [
		{ type: 'json' },
	  ],
	  dir: './coverage/',
	  subdir: (browser) => {
		return browser.toLowerCase().split(/[ /-]/)[0]; // returns 'chrome'
	  },
	},
	
	
	
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
