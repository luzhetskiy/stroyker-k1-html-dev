const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync");
const sourcemaps = require("gulp-sourcemaps");
const clean = require("gulp-clean");

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

console.log(mode);

function sync() {
  browserSync.init({
    server: {
      baseDir: "public/",
    },
    online: true,
    open: false,
  });
}

function scripts() {
  return gulp
  .src(["src/scripts/*.js"])
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("public/js"))
  .pipe(browserSync.stream());
}

function scriptsBuild() {
  return gulp
  .src(["src/scripts/*.js"])
  .pipe(uglify())
  .pipe(gulp.dest("build/js"))
  .pipe(browserSync.stream());
}

function styles() {
  return gulp
  .src([`src/styles/*.sass`])
  .pipe(sourcemaps.init())
  .pipe(sass({ "include css": true }))
  .pipe(sourcemaps.write())
  .pipe(cleanCSS())
  .pipe(gulp.dest("public/css"))
  .pipe(browserSync.stream());
}

function stylesBuild() {
  return gulp
  .src([`src/styles/*.sass`])
  .pipe(sass({ "include css": true }))
  .pipe(cleanCSS())
  .pipe(gulp.dest("build/css"))
  .pipe(browserSync.stream());
}

function cleanBuild() {
  return gulp.src("build", { read: false }).pipe(clean());
}

function build() {
  return gulp.src([`public/**/*`]).pipe(gulp.dest("build"));
}

function startWatch() {
  gulp.watch(`src/styles/**/*`, { usePolling: true }, styles);
  gulp.watch(["src/scripts/**/*.js"], { usePolling: true }, scripts);
  gulp.watch(`public/**/*`, { usePolling: true }).on("change", browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;

exports.default = gulp.series(scripts, styles, gulp.parallel(sync, startWatch));
exports.build = gulp.series(cleanBuild, build, scriptsBuild, stylesBuild);
