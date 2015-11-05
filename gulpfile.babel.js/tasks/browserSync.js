'use strict';
var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', (done) => {
  const options = {
    ui: false,
    port: 35829,
    ghostMode: false,
    open: false,
    notify: false,
    logSnippet: false,
    socket: {
      // Use the actual port here.
      domain: getRootUrl
    }
  };

  function getRootUrl(options) {
    const port = options.get('port');
    return `http://localhost:${port}`;
  }

  function getClientUrl(options) {
    const connectUtils = require('browser-sync/lib/connect-utils');
    const pathname = connectUtils.clientScript(options);
    return getRootUrl(options) + pathname;
  }

  browserSync.init(options, (err, bs) => {
    if (err) return done;
    config.env = {BROWSER_SYNC_CLIENT_URL: getClientUrl(bs.options)};
    browserSync.watch('./dist/**').on('change', browserSync.reload);
    done();
  });
});
