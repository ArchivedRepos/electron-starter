import * as gulp from 'gulp';
import * as path from 'path';
import config from '../config';
import {exec} from 'child_process';

gulp.task('electron', done => {
  exec(path.resolve('node_modules/.bin/electron') + ' .',
       {env: Object.assign(process.env, config.env)},
       (err, stdout, stderr) => {
         if (err) console.log(err);
         console.log(stdout);
         console.log(stderr);
       });
       done();
});
