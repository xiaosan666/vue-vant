/**
 * http
 */
import axios from 'axios'

import util from '@/providers/util'
import helper from '@/providers/helper'
import globalData from '@/providers/globalData'

let REQUEST_NUMBER = 0

const showLoading = function(config) {
  ++REQUEST_NUMBER
  config.showLoading && helper.showLoading()
}
const hideLoading = function() {
  --REQUEST_NUMBER === 0 && helper.hideLoading()
}
/**
 *  统一参数
 *  异常处理
 *  控制loading
 *  添加请求头
 *  请求数据缓存
 */

// https://www.kancloud.cn/yunye/axios/234845
const axiosBaseInstance = axios.create({
  baseURL: 'https://www.yanxiaojun617.com/invoice/api/',
  timeout: 10000,
  responseType: 'json'
})

const request = function(config) {
  if (config.cacheData) { // 如果需要缓存，先尝试从sessionStorage中取数据
    let data = util.sessionStorage.get(JSON.stringify(config))
    if (data) {
      return Promise.resolve(data)
    }
  }
  showLoading(config)
  if (globalData.token) { //  添加请求头
    config.headers = {'Authorization': `Bearer ${globalData.token}`, ...config.headers}
  }
  return axiosBaseInstance.request(config).then(res => {
    hideLoading()
    if (res.data && res.data.code === 1) {
      let data = res.data.data
      if (config.cacheData) { // 如果需要缓存，保存数据到sessionStorage中
        util.sessionStorage.set(JSON.stringify(config), data)
      }
      return Promise.resolve(data)
    } else {
      return Promise.reject(res)
    }
  }, err => {
    hideLoading()
    return Promise.reject(err)
  })
}

const get = function(url, data, config) {
  return request({
    method: 'GET',
    url,
    params: data,
    ...config
  })
}

const del = function(url, data, config) {
  return request({
    method: 'DELETE',
    url,
    params: data,
    ...config
  })
}
const post = (url, data, config) => {
  return request({
    method: 'POST',
    url,
    data,
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
    ...config
  })
}

const postFormData = (url, data, config) => {
  return request({
    method: 'POST',
    url,
    data,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    ...config
  })
}

export default {
  axiosBaseInstance,
  request,
  get,
  del,
  post,
  postFormData
}
