module.exports = function(grunt) {
  grunt.file.setBase('../../');
  grunt.loadNpmTasks('grunt-electron-installer');
  grunt.initConfig({
    'create-windows-installer': {
      x64: {
        appDirectory: './release/tmp/electronapp-win32-x64',
        outputDirectory: './release/installers',
        authors: 'Alex Lu',
        // loadingGif: './installing.gif',
        exe: 'electron.exe'
      }
    }
  });
  grunt.registerTask('default', ['create-windows-installer']);
};
