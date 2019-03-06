
const api = require('../api/index')

const getFilmsList = (callback) => {
    api.request({
        url: '/ajax/movieOnInfoList?token=',
        success:(data) => {
            // console.log(date)
            callback(data)
        }
    })
}

module.exports = {
    getFilmsList
}