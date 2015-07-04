var gulp = require('gulp'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify')

gulp.task('default',function(){
  gulp.watch('./static/js/*.js',['scripts']);
  gulp.watch('./static/css/*.css',['css']);
  gulp.watch('./static/jade/*.jade',['jade']);
})

gulp.task('scripts',function(){
  gulp.src(['./static/js/jquery.min.js','./static/js/vue.min.js','./static/js/semantic.min.js','./static/js/jquery.flexslider-min.js','./static/js/global.js'])
    .pipe(concat('global.js'))
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('css',function(){
  gulp.src('./static/css/*.css')
    .pipe(concat('global.css'))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('jade',function(){
  gulp.src('./static/jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
})