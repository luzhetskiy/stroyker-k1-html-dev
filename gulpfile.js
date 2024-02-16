const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const dartSass = require("dart-sass");
const terser = require("gulp-terser");
const browserSync = require("browser-sync");
const sourcemaps = require("gulp-sourcemaps");
const gulpPostCss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssNano = require("cssnano");
const babel = require("gulp-babel");
const clean = require("gulp-clean");
const preprocess = require("gulp-preprocess");
const gulpCopy = require("gulp-copy");

const sass = gulpSass(dartSass);
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const postCssPlugins = [autoprefixer(), cssNano()];
const babelConfig = {
  presets: ["@babel/preset-env"],
};

console.log(mode);

const sync = () => {
  browserSync.init({
    server: {
      baseDir: "public/",
    },
    online: true,
    notify: false,
    open: false,
  });
};

const html = () => {
  return gulp
  .src(["src/pages/**/*.html"])
  .pipe(preprocess({ context: { NODE_ENV: mode } }))
  .pipe(gulp.dest("./public/"));
};

const libs = () => {
  return gulp.src(["src/shared/libs/**/*"]).pipe(gulpCopy("public", { prefix: 2 }));
};

const assets = () => {
  return gulp
  .src(["src/shared/assets/images/**/*", "src/shared/assets/fonts/**/*"])
  .pipe(gulpCopy("public", { prefix: 3 }));
};

const scripts = () => {
  return gulp
  .src(["src/app/scripts/*.js"])
  .pipe(sourcemaps.init())
  .pipe(preprocess({ context: { NODE_ENV: mode } }))
  .pipe(babel(babelConfig))
  .pipe(terser())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("public/js"))
  .pipe(browserSync.stream());
};

const scriptsBuild = () => {
  return gulp
  .src(["src/app/scripts/*.js"])
  .pipe(preprocess({ context: { NODE_ENV: mode } }))
  .pipe(babel(babelConfig))
  .pipe(terser())
  .pipe(gulp.dest("build/js"))
  .pipe(browserSync.stream());
};

const styles = () => {
  return gulp
  .src([`src/app/styles/*.sass`])
  .pipe(sourcemaps.init())
  .pipe(sass({ "include css": true }))
  .pipe(gulpPostCss(postCssPlugins))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("public/css"))
  .pipe(browserSync.stream());
};

const stylesBuild = () => {
  return gulp
  .src([`src/app/styles/*.sass`])
  .pipe(sass({ "include css": true }))
  .pipe(gulpPostCss(postCssPlugins))
  .pipe(gulp.dest("build/css"))
  .pipe(browserSync.stream());
};

const cleanBuild = () => {
  return gulp.src("build", { read: false }).pipe(clean());
};

const createBuild = () => {
  return gulp.src([`public/**/*`]).pipe(gulp.dest("build"));
};

const startWatch = () => {
  gulp.watch(`src/**/*.sass`, { usePolling: true }, styles);
  gulp.watch(`src/**/*.css`, { usePolling: true }, styles);
  gulp.watch(["src/**/*.js"], { usePolling: true }, scripts);
  gulp.watch(`src/**/*.html`, { usePolling: true }, html);
  gulp.watch("src/shared/libs/**/*", { usePolling: true }, libs);
  gulp.watch("src/shared/assets/**/*", { usePolling: true }, assets);
  gulp.watch(`public/**/*`, { usePolling: true }).on("change", browserSync.reload);
};

exports.styles = styles;
exports.scripts = scripts;
exports.libs = libs;
exports.assets = assets;

exports.default = gulp.series(scripts, html, styles, assets, libs, gulp.parallel(sync, startWatch));
exports.build = gulp.series(cleanBuild, createBuild, scriptsBuild, stylesBuild);
