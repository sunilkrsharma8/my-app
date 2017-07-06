'use strict';
const path = require('path');
const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');
const sassdoc = require('sassdoc');
const importOnce = require('node-sass-import-once');
const stylemod = require('gulp-style-modules');
const browserSync = require('browser-sync').create();
const gulpif = require('gulp-if');
const combiner = require('stream-combiner2');
const bump = require('gulp-bump');
const argv = require('yargs').argv;
const vulcanize = require('gulp-vulcanize');
const rename = require('gulp-rename');
const sassdocOptions = {
  dest: 'docs',
  verbose: true,
  display: {
    access: ['public', 'private'],
    alias: true,
    watermark: true,
  },
  groups: {
    'undefined': 'Ungrouped'
  }
};

const sassOptions = {
  importer: importOnce,
  importOnce: {
    index: true,
    bower: true
  }
};

gulp.task('vulcanize', function() {
  return gulp.src('_index.html')
    .pipe(vulcanize({
      abspath: '',
      excludes: ['bower_components/px-theme/px-theme-styles.html'],
      stripComments: true,
      inlineCSS: true,
      inlineScripts: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('bump:patch', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'minor'}))
  .pipe(gulp.dest('./'));
});

gulp.task('bump:major', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'major'}))
  .pipe(gulp.dest('./'));
});

gulp.task('clean', function() {
  return gulp.src(['.tmp', 'css'], {
    read: false
  }).pipe($.clean());
});


gulp.task('clean', function() {
  return gulp.src(['.tmp', 'css'], {
    read: false
  }).pipe($.clean());
});

gulp.task('sassdoc', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sassdoc(sassdocOptions));
});

function handleError(err){
  console.log(err.toString());
  this.emit('end');
}

function buildCSS(){
  return combiner.obj([
    $.sass(sassOptions),
    $.autoprefixer({
      browsers: ['last 2 versions', 'Safari 8.0'],
      cascade: false
    }),
    gulpif(!argv.debug, $.cssmin())
  ]).on('error', handleError);
}

gulp.task('sass', function() {
  return gulp.src(['./sass/*.scss', '!./sass/*sketch.scss', '!./sass/*-demo.scss'])
    .pipe(buildCSS())
    .pipe(gulpif(/.*predix/,
      $.rename(function(path){
        path.basename = new RegExp('.+?(?=\-predix)').exec(path.basename)[0];
      })
    ))
    .pipe(stylemod({
      moduleId: function(file) {
        return path.basename(file.path, path.extname(file.path)) + '-styles';
      }
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream({match: 'css/*.html'}));
});

gulp.task('autoprefixer', function() {
  return gulp.src('css/noprefix/*.css')
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.size())
    .pipe($.rename(`${pkg.name}.css`))
    .pipe(gulp.dest('css'));
});


gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('autoprefixer:watch', function() {
  gulp.watch('./css/**/*.css', ['autoprefixer']);
});

gulp.task('serve', function() {
  browserSync.init({
    port: 8080,
    notify: false,
    reloadOnRestart: true,
    logPrefix: `${pkg.name}`,
    https: false,
    files: ['*.*'],
    server: ['./', 'bower_components'],
  });

  gulp.watch(['css/*-styles.html', '*.html', 'bower_components/**/*.html']).on('change', browserSync.reload);
  gulp.watch(['sass/*.scss'], ['sass']);

});

gulp.task('styles', gulpSequence('clean', 'sass', 'autoprefixer', 'poly-styles'));

gulp.task('watch', function() {
  gulp.watch(['sass/*.scss'], ['sass']);
});

gulp.task('default', gulpSequence('clean', 'sass', 'sassdoc', 'vulcanize'));
