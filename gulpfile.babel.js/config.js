import {argv as args} from 'yargs';
const dest = './dist';
const src = './src';
const port = 3000;
const shouldWatch = args.watch;

export default {
  env: {},
  watch: shouldWatch,
  src: src,
  dest: dest,
  webpack: {
    entry: {
      bundle: src + '/bundles/bundle.js'
    },
    output: {
      filename: '[name].js',
      path: dest + '/bundles'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loaders: [
          'babel-loader'
        ]
      }]
    },
    target: 'atom'
  },
  sass: {
    settings: {
      sourceComments: 'map',
      imagePath: '/img' // Used by the image-url helper
    }
  },
  production: {
    cssSrc: dest + '/**/*.css',
    jsSrc: dest + '/**/*.js',
    dest: dest
  },
  clean: {
    src: dest
  },
  deploy: {
    src: dest + '/**/*'
  }
};