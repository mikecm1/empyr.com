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
    pxtorem = require('gulp-pxtorem'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    replace = require('gulp-replace'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    imageOptim = require('gulp-imageoptim'),
    changed = require('gulp-changed'),
    csso = require('postcss-csso');

gulp.task('generate', shell.task('bundle exec jekyll serve --watch --incremental --livereload'));
gulp.task('buildit', shell.task('bundle exec jekyll build -d _site'));


gulp.task('scss-local', function () {
    var postcssOptions = {
        map: true,
        "map.inline": false
    };
    var processors = [
        utilities(),
        autoprefixer({
            "browsers": ["> 1%", "last 2 versions", "IE 9"]
        }),
        csso({
            comments: false
        })
    ];
    return gulp.src('./assets/css/main.scss')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(touch());
});


gulp.task('jsTask', function () {
    return gulp.src('.assets/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/'))
});


var cbString = new Date().getTime();

function cacheBustTask() {
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}


// Deploy on forestry.io
gulp.task('deploy', gulp.series(
    'buildit'
));

// Watch scss changes
// gulp.task('watch', function () {
//     gulp.watch('assets/**/*.scss', gulp.series('scss-local'));
// });

// gulp.task('watch', function () {
//     gulp.watch(['assets/**/*.scss', 'img/*', 'assets/img/*', 'assets/pictures/*'], gulp.series('scss-local'));
// });

// gulp.task('watch', function () {
//     gulp.watch(['assets/**/*.scss'], gulp.series('scss-local'));
//     gulp.watch(['img/*', 'assets/img/*', 'assets/pictures/*'], gulp.series('images'));
// });

gulp.task('watch', function () {
    gulp.watch(['assets/**/*.scss'], gulp.series('scss-local'));

    gulp.watch(['img/*', 'assets/img/*', 'assets/pictures/*'], gulp.series('images'));


});



// Image optimizations
gulp.task('images', function () {
    return gulp.src([
            'img/*.{png,gif,jpg}',
            'assets/img/*.{png,gif,jpg}',
            'assets/pictures/*.{png,gif,jpg}',
        ])
        .pipe(imageOptim.optimize())
        .pipe(
            gulp.dest(function (file) {
                return file.base;
            })
        )
});

// 
// Default: watch and build local
gulp.task('default', gulp.parallel(
    'generate',
    'watch'
));



// 
// For final compile and watch, run 'gulp compile'
// CSS compile speeds are slower due to uncss

gulp.task('scss-full', function () {
    var pxtoremOptions = {
        replace: false
    };
    var postcssOptions = {
        map: true,
        "map.inline": false
    };
    var processors = [
        uncss({
            html: ['./_site/**/*.html'],
            ignore: ['.fade']
        }),
        utilities(),
        autoprefixer({
            "browsers": ["> 1%", "last 2 versions", "IE 9"]
        }),
        csso({
            comments: false
        })
    ];
    return gulp.src('./assets/css/main.scss')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss(processors))
        .pipe(pxtorem(pxtoremOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(touch());
});

// Watch scss changes
gulp.task('watch-full', function () {
    gulp.watch('assets/**/*.scss', gulp.series('scss-full'));
});

// Watch and compile complete with uncss and optimizations
gulp.task('compile', gulp.parallel(
    'generate',
    'images',
    'watch-full'
));
