var gulp = require('gulp');
var mocha = require('gulp-mocha');
var coveralls = require('gulp-coveralls');

gulp.task('coveralls', function () {
  return gulp.src('test/coverage/**/lcov.info')
    .pipe(coveralls());
});

gulp.task('test', function () {
  return gulp.src(['test/*.test.js'], {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }));
});