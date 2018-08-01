import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main', 
      'pages/about/main', 
      // 'pages/detail/index'
    ],
    tabBar: {
      "color:": "#8a8a8a",
      "selectedColor": "#000",
      "list": [
        {
          "pagePath": "pages/index/main",
          "text": "首页",
          "iconPath": "./static/index.png",
          "selectedIconPath": "./static/index_selected.png"
        },
        {
          "pagePath": "pages/about/main",
          "text": "关于",
          "iconPath": "./static/about.png",
          "selectedIconPath": "./static/about_selected.png"
        }
      ]
    },
    window: {
      "backgroundTextStyle":"light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "车标速查",
      "navigationBarTextStyle":"black"
    }
  }
}
