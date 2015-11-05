import gulp from 'gulp';
import {exec} from 'child_process';

gulp.task('electron', done => {
  exec('node_modules/.bin/electron .', (err, stdout, stderr) => {
    if (err) console.log(err);
  });
  done();
});
