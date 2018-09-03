var gulp = require('gulp');
var runSequence = require('run-sequence');
var protractor = require('gulp-protractor').protractor;
var taskListing = require('gulp-task-listing');
var webdriver_update = require('gulp-protractor').webdriver_update_specific;


gulp.task('webdriver_update', webdriver_update({
    webdriverManagerArgs: ['--ignore_ssl']
}));

gulp.task('protractor', function() {
  var configFile = 'conf.js';

  return gulp
  .src(['./TestScripts/*.js'])
  .pipe(protractor({
    configFile: configFile
  }))
  .on('error', function(e) { throw e; });
});

gulp.task('test:e2e', function(callback) {
  runSequence(
    'webdriver_update',
    'protractor',
    callback
  );
});

gulp.task( 'default', taskListing);
