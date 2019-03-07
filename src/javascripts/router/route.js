
const appIndexController = require('../controllers/app-main-controllers')
const appCinemaController = require('../controllers/app-cinema-controller')
//路由表
let routes = {
    '/index':appIndexController.render,
    '/cinema': appCinemaController.render
}

module.exports = routes