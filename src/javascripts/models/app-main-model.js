
const api = require('../api/index')

const getFilmsList = () => {
    return api.request({url: '/ajax/movieOnInfoList?token='})
   
}

module.exports = {
    getFilmsList
}

