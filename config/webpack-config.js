const path = require ('path')

const webpackConfig = {
    mode: 'development',//配置打包模式
    entry: {
        index: path.join(__dirname,'../src/javascripts/index.js')
    },
    output:{
        // path: path.join(__dirname,'../dist/javascripts/index.js'),
        filename: '[name].js'
    },
        module: { //配置各个loader
        rules: [ //放入一个个规则
            {
                test: /\.html$/,//寻找后缀名为HTML的模块
                use: 'string-loader'//对这些模块使用神loader
            }
        ]
    }
}

module.exports = webpackConfig