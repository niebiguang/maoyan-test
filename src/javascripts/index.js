
const Router = require('./router/router')

const appController = require('./controllers/app-controller')

appController.render()

new Router(
    {
        initial:'/index'
    }
).init()