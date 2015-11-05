import gulp from 'gulp';
import path from 'path';
import config from '../config';
import {exec} from 'child_process';

gulp.task('electron', done => {
  exec(path.resolve('node_modules/.bin/electron') + ' .',
       {env: config.env},
       (err, stdout, stderr) => {
         if (err) console.log(err);
       });
       done();
});
