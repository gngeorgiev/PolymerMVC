module.exports = function (grunt) {
	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'conf/karma.conf.js',
				browsers: ['Chrome']
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('test', ['karma:unit']);
};
