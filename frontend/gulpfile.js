var gulp     = require('gulp');
var concat   = require('gulp-concat');
var sass     = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');

gulp.task('default', [
  'app',
  'vendor'
]);

gulp.task('app', [
  'app-js',
  'app-sass',
  'app-views',
  'app-index'
]);

gulp.task('app-js', function() {
  return gulp.src([
    './src/app-module.js',
    './src/*.js',
    './src/**/*.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('app-sass', function() {
  return gulp.src([
    './src/sass/app.scss'
  ])
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('app-views', function() {
  return gulp.src([
    './src/views/**'
  ])
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('app-index', function() {
    return gulp.src([
      './src/index.html'
    ])
      .pipe(gulp.dest('./dist'));
});

gulp.task('vendor', [
  'vendor-js',
  'vendor-css',
  'vendor-fonts'
]);

gulp.task('vendor-js', function() {
  return gulp.src([
    './node_modules/angular/angular.js',
    './node_modules/angular-route/angular-route.js',
    './node_modules/angular-resource/angular-resource.js',
    './node_modules/angular-storage/dist/angular-storage.js',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap/dist/js/bootstrap.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('vendor-css', function() {
  return gulp.src([
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
  ]).pipe(concat('vendor.css'))
  .pipe(gulp.dest('./dist/css'));
});
gulp.task('vendor-fonts', function() {
  return gulp.src([
    './node_modules/bootstrap/dist/fonts/*',
  ]).pipe(gulp.dest('./dist/fonts'))
});
