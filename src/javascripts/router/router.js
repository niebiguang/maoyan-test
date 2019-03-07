

//开发router

let routes = require('./route')
class Router {
    constructor ({ initial }) {
        this.routes = routes //路由表
        this.initial = initial //默认hash
    }

    init () {
        this.initialAction()
        this.listenHashChange()
    }

    handlerNavlink (path) {
        $('.nav-link').removeClass('active')
        $('.nav-link').each((i, item) => {
            if ( $(item).data('path') === path) $(item).addClass('active')
        })
    }

    refreshRouter (path) {
        this.routes[path]()
        this.handlerNavlink(path)
    }
    initialAction () {
        let path = location.hash.replace('#','')
        if (!path) {
            location.hash = this.initial
        } else {
            this.refreshRouter(path)
        }
    }
    listenHashChange () { //监听hash值变化后执行对应的操作
        
        window.addEventListener('hashchange', () => {
            let path = location.hash.replace('#','')
            let handler = this.routes[path]
            if (handler) {
                this.refreshRouter(path)
            } else {
                // this.routes[this.initial]()
                location.hash = this.initial
            }
        })
    }
}

module.exports = Router