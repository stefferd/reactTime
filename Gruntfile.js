'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({
      browsers: ["last 2 versions", 'IE >= 9']
    });

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
        compress: true,
        plugins: [autoprefixPlugin]
      },
      dist: {
        files: {
          "style/css/main.css": "style/less/main.less"
        }
      }
    },
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/ui/components/timesheet.js': 'ui/components/timesheet.js',
          'dist/ui/components/selector.js': 'ui/components/selector.js'
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 9000,
          onCreateServer: function(server, connect, options) {
            //require('./server')(server);
          }
        }
      }
    },
    watch: {
      js: {
        files: ['ui/**/*.js'],
        tasks: ['babel']
      },
      css: {
        files: ['style/**/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.registerTask(
    'serve',
    ['babel', 'less', 'connect', 'watch']
  );


};
