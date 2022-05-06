import MusicBoxVue3 from './music-box-vue3/index.vue'

const myPlugin = {
  // 安装插件
  install(app, options) {
    // 配置此应用
    app.component("MusicBoxVue3", MusicBoxVue3);
    // console.log('查看配置',options)
  }
}


export default myPlugin