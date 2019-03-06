
//为了统一处理跨域路径，对请求回来的数据进行处理
const api = {
    request ({
        url,
        data,
        methoed,
        success
    }) {
        $.ajax({
            url: '/maoyan' + url,
            data:data || {},
            methoed:methoed || 'get',
            success: (res) => {
                // console.log(res)
                success(res)
            },
            error:(error) => {
                console.log('请求出错',error)
            }
            
        })
    }
}

module.exports = api