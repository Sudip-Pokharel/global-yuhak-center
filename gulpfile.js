var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-cleancss');



sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function () {
    return gulp.src('./css/style.css')
        .pipe(cleanCSS({ debug: true }, function (details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./css'));
});


gulp.task('watch', function () {
    return gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task("default", gulp.series('sass',
    gulp.parallel('watch')
));