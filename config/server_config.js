

const serverConfig = {
    livereload:{
        enable:true
    },
    open:false,
    directoryListing:false,
    port:3000,
    proxies: [//让开发服务器请求目标服务器
        {
            source: '/maoyan',
            target: 'http://m.maoyan.com/',
        }
    ]
}

module.exports = serverConfig