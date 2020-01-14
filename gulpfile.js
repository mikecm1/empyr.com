var gulp = require("gulp"),
 shell = require("gulp-shell"),
 sass = require("gulp-sass"),
 sourcemaps = require("gulp-sourcemaps"),
 touch = require("gulp-touch-cmd"),
 postcss = require("gulp-postcss"),
 autoprefixer = require("autoprefixer"),
 uncss = require("postcss-uncss"),
 utilities = require("postcss-utilities"),
 pxtorem = require("gulp-pxtorem"),
 concat = require("gulp-concat"),
 replace = require("gulp-replace"),
 imagemin = require("gulp-imagemin"),
 pngquant = require("imagemin-pngquant"),
 imageOptim = require("gulp-imageoptim"),
 csso = require("postcss-csso"),
 rename = require("gulp-rename"),
 minify = require("gulp-minify"),
 purgecss = require("gulp-purgecss");

var uglify = require("gulp-uglify-es").default;
const srcset = require("gulp-srcset").default;

gulp.task("generate", shell.task("bundle exec jekyll serve --watch --incremental --livereload"));
gulp.task("buildit", shell.task("bundle exec jekyll build -d _site"));

gulp.task("scss-local", function() {
 var postcssOptions = {
  map: false,
  "map.inline": false
 };
 var processors = [
  utilities(),
  autoprefixer({
   overrideBrowserslist: ["> 1%", "last 2 versions", "IE 9"]
  }),
  csso({
   comments: false
  })
 ];
 return gulp
  .src("./assets/scss/main.scss")
  .pipe(
   sourcemaps.init({
    loadMaps: true
   })
  )
  .pipe(sass())
  .on("error", sass.logError)
  .pipe(postcss(processors))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("assets/css/"))
  .pipe(touch());
});

gulp.task("scss-full", function() {
 var postcssOptions = {
  map: false,
  "map.inline": false
 };
 var processors = [
  utilities(),
  autoprefixer({
   overrideBrowserslist: ["> 1%", "last 2 versions", "IE 9"]
  }),
  csso({
   comments: false
  })
 ];
 return gulp
  .src("./assets/scss/main.scss")
  .pipe(
   sourcemaps.init({
    loadMaps: false
   })
  )
  .pipe(sass())
  .on("error", sass.logError)
  .pipe(
   purgecss({
    content: ["./_site/**/*.html"],
    whitelistPatterns: [/aos/, /swiper/]
   })
  )
  .pipe(postcss(processors))
  .pipe(gulp.dest("assets/css/"))
  .pipe(touch());
});

gulp.task("watch", function() {
 gulp.watch(["assets/**/*.scss"], gulp.series("scss-local"));
});

gulp.task("watch-full", function() {
 gulp.watch(["assets/**/*.scss"], gulp.series("scss-full"));
});

gulp.task("watch-scss", function() {
 gulp.watch(["assets/**/*.scss"], gulp.series("scss-local"));
});

//
// Gulp Commands

// Default: build and watch local / Run 'gulp'
gulp.task("default", gulp.parallel("generate", "watch-scss"));

gulp.task("full", gulp.parallel("generate", "watch-full"));

// Compile and minify CSS
gulp.task("deploy", gulp.series("scss-full", "buildit"));

// Deploy on CDN
gulp.task('build', gulp.series(
  'buildit'
));
