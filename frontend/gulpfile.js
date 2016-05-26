var gulp   = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

gulp.task('default', [
  'app',
  'vendor'
]);

gulp.task('app', [
  'app-js',
  'app-css',
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
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({message: "APP: JS Build task completed"}));
});

gulp.task('app-css', function() {
  return gulp.src([
    './src/app.css'
  ])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify({message: "APP: CSS Build task completed"}));
});

gulp.task('app-views', function() {
  return gulp.src([
    './src/views/**'
  ])
    .pipe(gulp.dest('./dist/views'))
    .pipe(notify({message: "APP: View Build task completed"}));
});

gulp.task('app-index', function() {
    return gulp.src([
      './src/index.html'
    ])
      .pipe(gulp.dest('./dist'))
      .pipe(notify({message: "APP: Index Build task completed"}));
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
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap/dist/js/bootstrap.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({message: "VENDOR: JS Build task completed"}));
});

gulp.task('vendor-css', function() {
  return gulp.src([
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
  ]).pipe(concat('vendor.css'))
  .pipe(gulp.dest('./dist/css'))
  .pipe(notify({message: "VENDOR: CSS Build task completed"}));
});
gulp.task('vendor-fonts', function() {
  return gulp.src([
    './bower_components/bootstrap/dist/fonts/*',
  ]).pipe(gulp.dest('./dist/fonts'))
});
