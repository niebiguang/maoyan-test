const gulp = require('gulp')//引入gulp模块
const webserver = require('gulp-webserver')//开启开发服务
const webpack = require('webpack-stream')//js模块化
const watch = require('gulp-watch')//监听文件变化
const sass = require('gulp-sass')//编译sass文件
const Path = require ('path')//处理路径
const del = require ('del')//删除文件
const { path, serverConfig, webpackConfig } = require('./config')//引入自定义的config模块


//迁移HTML文件
//将src目录中的html文件复制到dist目录中
gulp.task('copy-html', () => {
    let { src,dist } = path;
    return gulp.src(src + '/*.html')
            .pipe(gulp.dest(dist))
})

//迁移static文件
//将src目录中的static目录以及其子目录复制到dist目录中
gulp.task('copy-static', () => {
    let { static,dist } = path;
    return gulp.src(static + '/**/*')
            .pipe(gulp.dest(dist + '/static'))
})

//处理js文件
gulp.task('pack-js', () => {
    let { src, dist } = path;
    return gulp.src(src + '/javascripts/**/*.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(dist + '/javascripts/'))
})

//处理sass文件
gulp.task('compile-sass', () => {
    let { src, dist } = path;
    return gulp.src(src + '/stylesheet/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest(dist + '/stylesheets'))
})

//开启开发服务器
gulp.task('webserver', () => {
    let { static,dist } = path;
    return gulp.src(dist)
            .pipe(webserver(serverConfig))
})

//监听文件
//监听src目录中HTML文件的变化，并将变化实时同步给dist目录中的HTML文件
// gulp.task('watch', () => {
//     let { src, dist } = path;
//     gulp.watch(src + '/*.html',['copy-html']);
//     gulp.watch(src + '/stylesheet/**/*.scss',['compile-sass']);
//     watch(src + '/static/**/*', (v) => {
//         console.log(v.event)
//         if ( v.event === 'unlink' ) { // 如果是删除文件
//             // 将dist/static中的对应文件也删掉
//             let _path = Path.resolve(dist + '/static/', v.path.split('\\static\\')[1])
//             del(_path) // 删除
//         } else {
//             gulp.start(['copy-static']) // 执行复制静态文件的任务
//         }
//     })
// })

gulp.task('watch', () => {
    let { dist, src } = path
    gulp.watch(src + '/*.html', ['copy-html']);
    gulp.watch(src + '/stylesheet/**/*.scss', ['compile-sass']);
    gulp.watch(src + '/javascripts/**/*', ['pack-js']);
    // 监听static中静态资源的变化
    watch(src + '/static/**/*', (v) => {
        console.log(v.event)
        if ( v.event === 'unlink' ) { // 如果是删除文件
            // 将dist/static中的对应文件也删掉
            let _path = Path.resolve(dist + '/static/', v.path.split('\\static\\')[1])
            del(_path) // 删除
        } else {
            gulp.start(['copy-static']) // 执行复制静态文件的任务
        }
    })
})

//将配置好的方法放到默认任务中统一执行中，以便操作
gulp.task('default', ['copy-static', 'copy-html','compile-sass','pack-js', 'watch', 'webserver'], () => console.log('gulp'))