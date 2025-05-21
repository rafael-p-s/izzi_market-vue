import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import api from './axios'

const app = createApp(App)
app.provide('api', api)
app.mount('#app')
