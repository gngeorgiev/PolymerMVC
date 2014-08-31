// Karma configuration
// Generated on Sun Aug 31 2014 18:36:57 GMT+0300 (EEST)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '../../',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'PolymerMVC/test/karma-html.js',
			'PolymerMVC/test/js/*.spec.js',
			'platform-dev/platform.js',
			'PolymerMVC/polymerMvc-core.js',
			'PolymerMVC/js/*.js', {
				pattern: '**/*.html',
				included: false
			}, {
				pattern: 'polymer/*.html',
				included: false,
			}, {
				pattern: 'CustomElements/custom-elements.js',
				included: false
			}, {
				pattern: 'CustomElements/src/*.js',
				included: false
			}, {
				pattern: 'HTMLImports/html-imports.js',
				included: false
			}, {
				pattern: 'HTMLImports/src/*',
				included: false
			}, {
				pattern: 'MutationObservers/*.js',
				included: false
			}, {
				pattern: 'NodeBind/src/*.js',
				included: false
			}, {
				pattern: 'PointerEvents/pointerevents.js',
				included: false
			}, {
				pattern: 'PointerEvents/src/*.js',
				included: false
			}, {
				pattern: 'PointerGestures/pointergestures.js',
				included: false
			}, {
				pattern: 'PointerGestures/src/*.js',
				included: false
			}, {
				pattern: 'ShadowDOM/shadowdom.js',
				included: false
			}, {
				pattern: 'ShadowDOM/src/**/*.js',
				included: false
			}, {
				pattern: 'TemplateBinding/load.js',
				included: false
			}, {
				pattern: 'TemplateBinding/src/*.css',
				included: false
			}, {
				pattern: 'TemplateBinding/src/*.js',
				included: false
			}, {
				pattern: 'URL/url.js',
				included: false
			}, {
				pattern: 'WeakMap/weakmap.js',
				included: false
			}, {
				pattern: 'observe-js/src/*.js',
				included: false
			}, {
				pattern: 'observe-js/util/*.js',
				included: false
			}, {
				pattern: 'platform-dev/platform.*',
				included: false
			}, {
				pattern: 'platform-dev/src/*.js',
				included: false
			}, {
				pattern: 'platform-dev/test/**/*.html',
				included: false
			}, {
				pattern: 'platform-dev/test/**/*.js',
				included: false
			}, {
				pattern: 'polymer-expressions/src/*.js',
				included: false
			}, {
				pattern: 'polymer-expressions/third_party/**/*.js',
				included: false
			}, {
				pattern: 'polymer-expressions/polymer-expressions.html',
				included: false
			}, {
				pattern: 'polymer-gestures/polymer-gestures.html',
				included: false
			}, {
				pattern: 'polymer-gestures/src/*.js',
				included: false
			}, {
				pattern: 'polymer-expressions/tests/*.js',
				included: false
			}, {
				pattern: 'TemplateBinding/tests/*.js',
				included: false
			}, {
				pattern: 'polymer-dev/polymer.html',
				included: false
			}, {
				pattern: 'polymer-dev/layout.html',
				included: false
			}, {
				pattern: 'polymer-dev/src/**/*.js',
				included: false
			}, {
				pattern: 'polymer-dev/build/polymer.js',
				included: false
			}, {
				pattern: 'polymer-dev/test/**/*.css',
				included: false
			}, {
				pattern: 'polymer-dev/test/**/*.html',
				included: false
			}, {
				pattern: 'polymer-dev/test/**/*.js',
				included: false
			}, {
				pattern: 'tools/**/*.js',
				included: false
			}, {
				pattern: 'tools/test/*',
				included: false
			}, {
				pattern: 'PolymerMVC/test/html/*.html',
				watched: true,
				served: true,
				included: false
			}, {
				pattern: 'PolymerMVC/*.html',
				watched: true,
				server: true,
				included: false
			}
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};
