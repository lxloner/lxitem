const gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass')

gulp.task('js',function(){
	gulp.src('./src/scss/index.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'))
	
})
gulp.task('default',function(){
	gulp.watch(['./src/scss/index.scss'],['js'])
})
