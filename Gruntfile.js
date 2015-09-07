/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    // '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    // '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    // '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    // ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    sass: {
      dist: {
        options: {                       // Target options
          style: 'compressed'
        },
        files: [{
          src: ['src/stylesheets/*.scss'],
          dest: 'dist/style.min.css'
        }]
      }
    },
    concat: {
      dist: {
        src: ['src/scripts/main.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
    // ,
    // watch: {
    //   gruntfile: {
    //     files: '<%= jshint.gruntfile.src %>',
    //     tasks: ['jshint:gruntfile']
    //   }
    // }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};
