import gulp from 'gulp';
import del from 'del';
import packager from 'electron-packager';

gulp.task('package', done => {
  gulp.src('./dist/**')
    .pipe(gulp.dest('./release/tmp/app/dist'));

  gulp.src('./package.json')
    .pipe(gulp.dest('./release/tmp/app'));

  packager({
    dir: './release/tmp/app',
    out: './release/tmp',
    name: 'webplatdata',
    platform: 'win32',
    arch: 'all',
    version: '0.34.2'
  }, (err, appPath) => {
    if (err) console.log(err);
    console.log(appPath);
    done();
  });
});

gulp.task('cleanrelease', done => {
  del('./release/tmp', done);
});
