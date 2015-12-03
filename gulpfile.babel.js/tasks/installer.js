import gulp from 'gulp';
import path from 'path';
import cp from 'child_process';
import grunt from 'grunt';

const spawn = cp.spawn;

gulp.task('installer', done => {
  const gruntCli = path.join(__dirname, '../../node_modules/.bin/grunt.cmd');
  const child = spawn(gruntCli, [], {cwd: path.join(__dirname, '../grunt')});
  child.stdout.on('data', data => {
    grunt.log.write(data);
  });
  child.stderr.on('data', data => {
    grunt.log.write(data);
  });
  child.on('close', code => {
    grunt.log.ok(`Done running Grunt with code: ${code}`);
    done();
  });
});
