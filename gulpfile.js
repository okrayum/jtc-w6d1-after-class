const gulp = require('gulp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const replace = require('gulp-replace');
const concatCss = require('gulp-concat-css');

gulp.task('webpack', function () {
  return gulp.src('src/index.js')
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(concatCss('styles.css')) 
    .pipe(gulp.dest('build/css/'));
});

gulp.task('html', function () {
  return gulp.src('public/**/*.html')
    .pipe(replace('</body>', '<script src="/js/bundle.js"></script></body>'))
    .pipe(replace('</head>', '<link rel="stylesheet" href="/css/styles.css"></head>'))
    .pipe(gulp.dest('build/'));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./build/"
    }
  });
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', gulp.series('webpack'));
  gulp.watch('src/**/*.css', gulp.series('css'));
  gulp.watch('public/**/*.html', gulp.series('html'));
});

gulp.task('default', gulp.series('webpack', 'css', 'html', 'browser-sync', 'watch'));

