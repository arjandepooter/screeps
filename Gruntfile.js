// Load env vars
require('dotenv').config();

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-screeps');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.registerTask('default', ['watch']);

	grunt.initConfig({
		screeps: {
			options: {
				email: process.env.EMAIL,
				password: process.env.PASSWORD,
				branch: process.env.BRANCH,
				ptr: false
			},
			dist: {
				src: ['src/*.js']
			}
		},

		watch: {
			scripts: {
				files: ['src/*.js'],
				tasks: ['eslint', 'screeps']
			}
		},

		eslint: {
			target: ['src/*.js']
		}
	});
}
