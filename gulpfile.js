const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const gutil = require("gulp-util");
const browserify = require("browserify");
const sass = require("gulp-sass");

gulp.task("build-scripts", function() {
  return browserify({
    entries: "./src/bootstrap.jsx",
    extensions: [".js", ".jsx"],
    debug: true
  }).transform("babelify") //uses .babelrc
    //.external(["react"])
    .bundle()
    .pipe(source("bootstrap.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist"));
});

gulp.task("vendor", function() {
  return gulp.src("./src/vendor/**/*")
    .pipe(gulp.dest("./dist"));
});

gulp.task("build-styles", function() {
  return gulp.src("./src/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["vendor", "build-scripts", "build-styles"]);

gulp.task("dev", function() {
  gulp.watch(["./src/**/*.js", "./src/**/*.jsx"], ["build-scripts"]);
  gulp.watch(["./src/**/*.css", "./src/**/*.scss"], ["build-styles"]);
});