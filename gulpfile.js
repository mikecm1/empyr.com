var gulp = require('gulp'),
    shell = require('gulp-shell'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    touch = require('gulp-touch-cmd'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    uncss = require('postcss-uncss'),
    pfm = require('postcss-font-magician'),
    utilities = require('postcss-utilities'),
    stylelint = require('gulp-stylelint'),
    reporter = require('postcss-reporter'),
    csso = require('postcss-csso');

gulp.task('generate', shell.task('bundle exec jekyll serve --watch --livereload -o'));
gulp.task('buildit', shell.task('bundle exec jekyll build -d _site'));

gulp.task('styles', function () {
    var processors = [
            uncss({
                html: ['./_site/**/*.html'],
                ignore: ['.fade']
            }),
            utilities(),
            autoprefixer({
                "browsers": [
                    "> 1%",
                    "last 2 versions",
                    "IE 9"
                ]
            }),
            csso({
                comments: false
            })
        ],
        processorsUnminify = [
            utilities(),
            autoprefixer({
                "browsers": [
                    "> 1%",
                    "last 2 versions",
                    "IE 9"
                ]
            })
        ];

    return gulp.src('./assets/css/main.scss')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass())
        .on("error", sass.logError)
        // .pipe(postcss(processors))
        .pipe(postcss(processorsUnminify))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(touch());
});

// Deploy task on forestry.io
gulp.task('deploy', gulp.series(
    'styles',
    'buildit'
));

// Watch scss changes
gulp.task('watch', function () {
    gulp.watch('assets/**/*.scss', gulp.series('styles'));
});

// Default: watch and build local
gulp.task('default', gulp.parallel(
    'watch',
    'generate'
));