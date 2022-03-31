const { src, dest, watch, series } = require('gulp');
// var gulp = require('gulp');
// var sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));

// gulp.task('sass', function() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass({outputStyle: 'expanded'}))
//     .pipe(gulp.dest('./css'));
// });
const cssSass = () => {
	return src('./sass/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(dest('./css'));
}

exports.sass = series(cssSass);

// gulp.task('sass:watch', function() {
//   gulp.watch('./sass/**/*.scss', gulp.task('sass'));
// });
// watch(globs, [options], [task])

exports.watch = () => {
	watch('./sass/**/*.scss', series(cssSass));
};

// 初版・2刷の方へ
// gulp v4 から上記の書き方に変更されています
// 本書P.51に乗っている gulp v3 の書き方
// gulp.task('sass:watch', function() {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });
