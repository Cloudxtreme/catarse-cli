var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jscs = require('gulp-jscs');

gulp.task('default', function(){
  gulp.src('src/**/*.js')
    .pipe(jscs())
    .pipe(jshint());
});

gulp.task('test', function(){
  gulp.src('test/*.spec.js')
    .pipe(jasmine());
});