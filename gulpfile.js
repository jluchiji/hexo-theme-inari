/**
 * Build script.
 */

var gulp           = require('gulp');
var path           = require('path');
var yaml           = require('yamljs');
var less           = require('gulp-less');
var babel          = require('gulp-babel');
var addsrc         = require('gulp-add-src');
var concat         = require('gulp-concat');
var cssmin         = require('gulp-cssmin');
var uglify         = require('gulp-uglify');
var prefix         = require('gulp-autoprefixer');
var sourcemap      = require('gulp-sourcemaps');

/* Load theme configuration */
var config         = yaml.load('_config.yml');

/* Default task */
gulp.task('default', ['scripts', 'styles']);

/* Bundles all script files */
gulp.task('scripts', function() {

  var files = (config.scripts || []).map(function(i) {
    return path.join('node_modules', i);
  }).concat('script/**/*.js');

  gulp.src(files)
    .pipe(sourcemap.init())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('source/js'));

});

/* Bundles all CSS files */
gulp.task('styles', function() {

  gulp.src(['style/bundle.less'])
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(prefix())
    .pipe(cssmin())
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('source/css'));

});

/* Auto-rebuild */
gulp.task('watch', function() {

  gulp.watch(['script/**/*.js'], ['scripts']);
  gulp.watch(['style/**/*.less'], ['styles']);

});
