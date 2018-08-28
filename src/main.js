import Vue from 'vue'
import App from './App.vue'

import loading from './lib/loading/index.js'

Vue.use(loading)
new Vue({
  el: '#app',
  render: h => h(App)
})



// ES6
// import loading from 'loading'

// //  通过require 导入
// var loading = require('loading')

// // 通过use挂载
// Vue.use(loading)

// // 或者直接导入js文件
// <script src="./dist/loading.js"></script>