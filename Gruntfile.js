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
          "public/assets/style/css/main.css": "resources/assets/style/less/main.less"
        }
      }
    },
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/assets/dist/ui/components/timesheet.js': 'resources/assets/ui/components/timesheet.js',
          'public/assets/dist/ui/components/entrysheet.js': 'resources/assets/ui/components/entrysheet.js',
          'public/assets/dist/ui/components/companyselector.js': 'resources/assets/ui/components/companyselector.js',
          'public/assets/dist/ui/components/projectselector.js': 'resources/assets/ui/components/projectselector.js',
          'public/assets/dist/ui/components/dateselection.js': 'resources/assets/ui/components/dateselection.js',
          'public/assets/dist/ui/components/monthselection.js': 'resources/assets/ui/components/monthselection.js',
          'public/assets/dist/ui/components/amountselector.js': 'resources/assets/ui/components/amountselector.js',
          'public/assets/dist/ui/components/description.js': 'resources/assets/ui/components/description.js'
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
        files: ['resources/assets/ui/**/*.js'],
        tasks: ['babel']
      },
      css: {
        files: ['resources/assets/style/**/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.registerTask(
    'serve',
    ['babel', 'less', 'watch']
  );

  grunt.registerTask(
    'build',
    ['babel', 'less']
  );


};
