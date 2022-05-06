Vue3音乐盒子插件

1. 安装

   ```
   npm i music-box-vue3
   ```

   

2. vue3项目中引入

   在main.js中全局引入

   ```
   import MusicBoxVue3 from 'music-box-vue3'
   import 'music-box-vue3/dist/style.css'
   
   const app = createApp(App)
   // 全局引入
   app.use(MusicBoxVue3).mount('#app')
   ```

3. 使用在vue文件中使用

   ```
   <music-box-vue3></music-box-vue3>
   ```