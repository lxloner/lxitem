const gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify');

gulp.task('css',function(){
	gulp.src('./src/scss/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'))
	
})
gulp.task('js',function(){
	gulp.src('./src/js/*.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest("./dist"))
})
gulp.task('default',function(){
	gulp.watch(['./src/scss/*.scss'],['css']);
	gulp.watch(['./src/js/*.js'],['js']);
}) 
