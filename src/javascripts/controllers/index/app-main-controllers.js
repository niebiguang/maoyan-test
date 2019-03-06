
const { getFilmsList } = require('../../models/index/app-main-model')

const render = async ( ) => {
    let appMainView = require('../../views/app-main.html')
    //渲染首页的电影列表页面
    let FileList = await getFilmsList()
    let template = Handlebars.compile(appMainView)
    $('#main').html(template({ films: FileList.movieList}))
    console.log(FileList)

}

module.exports = { render } 