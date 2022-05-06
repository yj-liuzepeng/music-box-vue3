import { createApp } from 'vue'
import App from './App.vue'
import MusicBoxVue3 from '../dist/music-box-vue3.es'
import '../dist/style.css'

const app = createApp(App)
app.use(MusicBoxVue3).mount('#app')
