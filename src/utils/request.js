import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
// create an axios instance
const service = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5dd3c8a233d2d62652630594/aPet/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      Toast.fail(res.message || 'Error')
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast.fail(error.message || 'Error')
    return Promise.reject(error)
  }
)

export default service
