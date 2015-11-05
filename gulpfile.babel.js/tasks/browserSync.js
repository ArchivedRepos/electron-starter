'use strict';
var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync').create('Server');
var argv = require('yargs').argv;

gulp.task('browserSync', (done) => {
  config.watch = true;
  browserSync.watch('./dist/**').on('change', browserSync.reload);
  browserSync.init(config.browserSync, done);
});
