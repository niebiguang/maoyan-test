//整个应用程序控制器
//任务之一：将视图渲染到页面中
const appMainController = require('./app-main-controllers')


// getFilmsList.render()

const render = () => {
    //0、承载容器
    let opp = $('#app');
    let header = $('#header');
    let footer = $('#footer');
    let main = $('#main');
    //1.获取视图
    let appHeaderView = require('../views/app-header.html')
    
    let appFooterView = require('../views/app-footer.html')
    // console.log(appHeaderView)
    //2、渲染试图
    header.append(appHeaderView)
    footer.append(appFooterView)
    appMainController.render()
}

module.exports = { render }