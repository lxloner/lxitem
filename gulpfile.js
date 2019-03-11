const gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify');

gulp.task('css',function(){
	gulp.src('./src/scss/index.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'))
	
})
gulp.task('js',function(){
	gulp.src('./src/js/index.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest("./dist"))
})
gulp.task('default',function(){
	gulp.watch(['./src/scss/index.scss'],['css']);
	gulp.watch(['./src/js/index.js'],['js']);
}) 
