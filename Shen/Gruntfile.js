/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '',
    // Task configuration.
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          src: ['src/style/*.scss'],
          dest: 'dist/style.min.css'
        }]
      }
    },
    watch: {
      files: ['**/*'],
      tasks: ['sass']
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  // grunt.registerTask('default', ['sass', 'concat', 'uglify']);
  grunt.registerTask('default', ['sass']);

};
