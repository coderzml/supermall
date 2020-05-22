// 导入axios
import axios from 'axios';

// // 第一种封装 传入三个参数 一个是config（配置）一个成功函数和失败函数
// // 导出这个函数
// export function request(config, success, failure) {
//   // 声明这个实例1
//   const instance = axios.create({
//     // 这里面写基础配置
//     baseURL: "http://152.136.185.210:8000",
//     timeout: 5000
//   })
//   instance(config).then(res => {
//     // 返回值
//     success(res)
//   }).catch(ero => {
//     failure(ero)
//   })
// }

// 第二种封装 传入一个对象 对象包含三个参数 一个是baseConfig（配置）一个成功函数和失败函数
// 导出这个函数
// export function request(config) {
//   // 声明这个实例1
//   const instance = axios.create({
//     // 这里面写基础配置
//     baseURL: "http://152.136.185.210:8000",
//     timeout: 5000
//   })
//   instance(config.baseConfig).then(res => {
//     // 返回值
//     config.success(res)
//   }).catch(ero => {
//     config.failure(ero)
//   })
// }

// 第三种封装 传入一个对象 对象一个baseConfig（配置）后面直接then即可
// 导出这个函数
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 声明这个实例1
//     const instance = axios.create({
//       // 这里面写基础配置
//       baseURL: "http://152.136.185.210:8000",
//       timeout: 5000
//     })
//     instance(config).then(res => {
//       // 返回值
//       resolve(res)
//     }).catch(ero => {
//       reject(ero)
//     })
//   })
// }

// 第四种封装 简化第三种封装
// 导出这个函数
export function request(config) {
  // 1.基础的配置
  // 这里因为baseurl不一样我想传入的内容有时候是带baseurl的有时是不带的所以加个判断
  var instance = axios.create({
    // 这里面写基础配置
    baseURL: "http://123.207.32.32:8000/",
    timeout: 5000
  })


  // 2.axios拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // 这里拦截的是一些配置 
    // 这里拦截通常用于添加一些基础配置 如登录的时候需要令牌 判断有没令牌 如果没有酒跳转别的页面注册 还有发送请求的时候显示一些小图标
    // console.log(config);
    // 拦截完之后要记得还回去 否则后面的代码拿不到数据
    return config;
  }, err => {
    console.log(err);
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(result => {
    // 这里是响应成功的时候  拿到的是一些数据 但是还有axios加上去的数据 有时候我们只想要data
    // console.log(result.data);
    // 拦截后也不要忘记还回去
    return result.data;
  }, err => {
    console.log(err);
  })
  // 3.真正发送请求的地方
  return instance(config);
}