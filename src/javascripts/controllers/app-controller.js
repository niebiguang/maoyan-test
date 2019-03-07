//整个应用程序控制器
//任务之一：将视图渲染到页面中
// const appMainController = require('./app-main-controllers')


// getFilmsList.render()

const render = () => {
    //1.获取视图
    let appHeaderView = require('../views/app-header.html')
    
    let appFooterView = require('../views/app-footer.html')
    // console.log(appHeaderView)
    //2、渲染试图
    $('#header').html(
        Handlebars.compile(appHeaderView)({title: '猫眼电影'})
    )
    
    $('#footer').html(appFooterView)
    $('#app-footer nav a').eq(0).addClass('active')
    // appMainController.render()
}

module.exports = { render }