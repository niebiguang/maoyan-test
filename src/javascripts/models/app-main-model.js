
const api = require('../api/index')

const getFilmsList = () => {
    return api.request({url: '/ajax/movieOnInfoList?token='})
    // return new Promise((res, rej) => {
    //     api.request({
    //         url: '/ajax/movieOnInfoList?token=',
    //         success: (data) => {
    //             res(data)
    //         }
    //     })
    // })
}

module.exports = {
    getFilmsList
}

