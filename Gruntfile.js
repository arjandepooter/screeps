// Load env vars
require('dotenv').config();

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-screeps');

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
		}
	});
}
