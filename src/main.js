import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import store from './store'

let app = createApp(App).use(store)
console.log(app)
app.mount('#app')

