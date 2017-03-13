// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
// import qs from 'qs' axios发送的数据不是json格式，若需要json格式，添加此库

import * as filters from './filters'

import config from '../config';

Vue.config.productionTip = false //在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示 

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)


//引入elment-ui 中部分组件，避免全部引入，包过大
//import { Select } from 'element-ui'
//Vue.component(Select.name,Select)
//
//import Message from 'element-ui/lib/message'
//Vue.prototype.$message = Message
//
//import Notification from 'element-ui/lib/notification'
//Vue.prototype.$notify = Notification


Object.keys(filters).forEach(key=>{
	Vue.filter(key,filters[key])
})


Vue.use(VueRouter);

const router = new VueRouter({
	routes
});

router.afterEach(route => {
	document.title = route.meta.title
})

sync(store,router)

// Add a request interceptor
axios.interceptors.request.use(function(config){
	// Do something before request is sent
	// config.withCredentials = true  // 需要跨域打开此配置
	// post提交 data存在 并且 data不是FormData对象时对数据进行json化处理
	// if(config.method==='post' && config.data && config.data.constructor !== FormData){
	//   config.data = qs.stringify(config.data)
	//   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
	// }
	// 开启loading动画
	store.dispatch('popup/loading/showLoading')
	return config;
},function(error){
	return Promise.reject(error)
})

axios.interceptors.response.use(function(response){
	//Do something with response data
	//关闭loading动画
	store.dispatch('popup/loading/hideLoading')
	return response;
},function(error){
	return Promise.reject(error)
});

axios.defaults.baseURI =(process.env.NODE_ENV !== 'production' ? config.dev.httpUrl:config.build.httpUrl);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount("#app")
