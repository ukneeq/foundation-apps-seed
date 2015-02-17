// FOUNDATION FOR APPS TEMPLATE GULPFILE
// -------------------------------------
// This file processes all of the assets in the "src/app" folder, combines them with the Foundation
// for Apps assets, and outputs the finished files in the "dist" folder as a finished app.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -

var gulp       = require('gulp'),
    $          = require('gulp-load-plugins')(),
    rimraf     = require('rimraf'),
    sequence   = require('run-sequence'),
    path       = require('path'),
    modRewrite = require('connect-modrewrite')
    //router     = require('./src/app/bower_components/foundation-apps/bin/gulp-dynamic-routing');

// 2. SETTINGS VARIABLES
// - - - - - - - - - - - - - - -

// Sass will check these folders for files when you use @import.
var sassPaths = [
  'src/app/scss',
  'src/app/bower_components/foundation-apps/scss'
];
// These files include Foundation for Apps and its dependencies
var foundationJS = [
  'src/app/bower_components/fastclick/lib/fastclick.js',
  'src/app/bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
  'src/app/bower_components/tether/tether.js',
  'src/app/bower_components/angular/angular.js',
  'src/app/bower_components/angular-animate/angular-animate.js',
  'src/app/bower_components/ui-router/release/angular-ui-router.js',
  'src/app/bower_components/foundation-apps/js/vendor/**/*.js',
  'src/app/bower_components/foundation-apps/js/angular/**/*.js',
  '!src/app/bower_components/foundation-apps/js/angular/app.js'
];
// These files are for your app's JavaScript
var appJS = [
  'src/app/**/*.js',
  '!src/app/bower_components/**/*.js'
];

// 3. TASKS
// - - - - - - - - - - - - - - -

// Cleans the build directory
gulp.task('clean', function(cb) {
  rimraf('./dist', cb);
});

// Copies user-created files and Foundation assets
gulp.task('copy', function() {
  var dirs = [
    './src/app/**/*.*',
    '!./src/app/bower_components/**/*.*',
    '!./src/app/scss/**/*.*'
  ];

  // Everything in the client folder except templates, Sass, and JS
  gulp.src(dirs, {
    base: './src/app/'
  })
    .pipe(gulp.dest('./dist'));

  // Iconic SVG icons
  gulp.src('./src/app/bower_components/foundation-apps/iconic/**/*')
    .pipe(gulp.dest('./dist/img/iconic/'));

  // Foundation's Angular partials
  return gulp.src(['.src/app/bower_components/foundation-apps/js/angular/components/**/*.html'])
    .pipe(gulp.dest('./dist/components/lib'));
});

// Compiles Sass
gulp.task('sass', function() {
  return gulp.src('src/app/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      sourcemap: true
    })).on('error', function(e) {
      console.log(e);
    })
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie 10']
    }))
    .pipe(gulp.dest('./dist/css/'));
});

// Compiles and copies the Foundation for Apps JavaScript, as well as your app's custom JS
gulp.task('uglify', function() {
  // Foundation JavaScript
  gulp.src(foundationJS)
    .pipe($.uglify({
      beautify: true,
      mangle: false
    }).on('error', function(e) {
      console.log(e);
    }))
    .pipe($.concat('foundation.js'))
    .pipe(gulp.dest('./dist/components/lib/'))
  ;

  // App JavaScript
  return gulp.src(appJS)
    .pipe($.uglify({
      beautify: true,
      mangle: false
    }).on('error', function(e) {
      console.log(e);
    }))
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('./dist/'))
  ;
});

// Starts a test server, which you can view at http://localhost:8080
gulp.task('server:start', function() {
  $.connect.server({
    root: './dist',
    middleware: function() {
      return [
        modRewrite(['^[^\.]*$ /index.html [L]'])
      ];
    },
  });
});

// Builds your entire app once, without starting a server
gulp.task('build', function() {
  sequence('clean', ['copy', 'sass', 'uglify'], function() {
    console.log("Successfully built.");
  })
});

// Default task: builds your app, starts a server, and recompiles assets when they change
gulp.task('default', ['build', 'server:start'], function() {
  // Watch Sass
  gulp.watch(['./src/app/scss/**/*', './scss/**/*'], ['sass']);

  // Watch JavaScript
  gulp.watch(['./src/app/**/*.js', './js/**/*'], ['uglify']);

  // Watch static files
  gulp.watch(['./src/app/**/*.*',
    '!./src/app/bower_components/**/*.*',
    '!./src/app/scss/**/*.*'], ['copy']);
});
