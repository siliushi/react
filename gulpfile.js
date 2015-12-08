var gulp = require('gulp');
var sass = require('gulp-sass');
var react = require('gulp-react');
var uglify = require("gulp-uglify");

// sass编译 
gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        // .pipe(sass({indentedSyntax: true}))
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// jsx语法编译
gulp.task('react', function () {
    return gulp.src('./jsdev/**/*.js')
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

// js打包
gulp.task('compress', function () {
    return gulp.src('./jsdev/**/*.js')
        .pipe(react())
        .pipe(uglify({
          mangle: false
        }))
        .pipe(gulp.dest('js/'));
});


// 自动编译
gulp.task('watch', function(){
    // 监听文件变化
    gulp.watch('./sass/*.scss', function(){
        gulp.run('sass');
    });
});


// 部署
gulp.task('build', ['compress', 'sass']);
