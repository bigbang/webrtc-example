module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        browserify: {
            //js: {
            //    src: 'main.js',
            //    dest: 'web/main.js'
           // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');


    grunt.registerTask('default', [ 'browserify']);
};
