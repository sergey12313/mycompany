const { src, dest, series, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserSync = require('browser-sync')
const minifyCSS = require('gulp-csso');
browserSync({
    server: {
        baseDir: 'distr'
    },
    notify: false,
});


const styles = function styles() {
    return src('src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(dest('distr/css'))
        .pipe(browserSync.reload({ stream: true }));
}

const browserWatch = function browserWatch() {
    watch("src/sass/**/*.scss", series(styles));
    watch("distr/*.html").on('change', browserSync.reload);
}



module.exports = {
    default: styles,
    serve: series(styles, browserWatch)
}