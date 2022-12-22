import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './bootstrap';

createApp(App).use(router, bootstrap).mount('#app')
