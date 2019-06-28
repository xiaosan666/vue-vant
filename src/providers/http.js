/**
 * http
 */
import axios from 'axios'

const helper = require('./helper.js')
const globalData = require('./globalData.js')
console.log(helper)
console.log(globalData)
/**
 *  统一参数
 *  异常处理
 *  控制loading
 *  添加请求头
 *  请求数据缓存
 */


const request = function(url, data = {}, config) {
  // https://www.kancloud.cn/yunye/axios/234845
  const _config = {
    url: url,
    method: 'POST',
    baseURL: 'https://www.yanxiaojun617.com/invoice/api/',
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
    data: data,
    timeout: 10000,
    responseType: 'json',
    ...config
  }
  return axios.request(_config).then(res => {
    console.log(res)
    return Promise.resolve(res)
  }, err => {
    return Promise.reject(err)
  })
}

const get = function(url, data) {
  return request(buildURLParams(url, data))
}

const post = (url, data) => {
  return request(url, data, 'POST')
}

const postFormData = (url, data) => {
  return request(url, data, 'POST', {'Content-Type': 'application/x-www-form-urlencoded'})
}

const buildURLParams = (url, data) => {
  if (!data || JSON.stringify(data) === '{}' || Array.isArray(data)) {
    return url
  }
  let arr = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      arr.push(key + '=' + encodeURIComponent(data[key]))
    }
  }
  let str = arr.join('&')
  return url + (url.lastIndexOf('?') === -1 ? '?' : '&') + str
}

export default {
  request,
  get,
  post,
  postFormData
}
