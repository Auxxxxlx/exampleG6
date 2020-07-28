import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

let app = createApp(App).use(store)
app.mount('#app')

