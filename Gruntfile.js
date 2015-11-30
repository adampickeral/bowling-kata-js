module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      src: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.js'],
            dest: 'transpiled',
            ext: '.js'
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: 'test',
            src: ['**/*.js'],
            dest: 'test-built',
            ext: '.js'
          }
        ]
      }
    },

    clean: {
      transpiled: ['transpiled'],
      test: ['test-built']
    },

    watch: {
      all: {
        files: [
          'src/**/*.js',
          'test/**/*.js'
        ],
        tasks: ['build-test'],
        options: {
          spawn: false
        }
      }
    },

    browserify: {
      test: {
        files: {
          'test_bundle.js': ['test-built/**/*.js']
        },
        options: {
          verbose: true
        }
      }
    },

    eslint: {
      target: ['src/**/*.js', 'test/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build-test', [
    'clean:test',
    'clean:transpiled',
    'babel:src',
    'babel:test',
    'browserify:test'
  ]);

  grunt.registerTask('build', [
    'clean:test',
    'clean:transpiled',
    'lint:eslint',
    'babel:src',
    'babel:test',
    'browserify:test'
  ]);

  grunt.registerTask('lint', ['eslint']);

  grunt.registerTask('default', ['build']);

};
