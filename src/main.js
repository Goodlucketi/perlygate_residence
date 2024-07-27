import './assets/main.css'
import 'aos/dist/aos.css';


import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App)

app.use(createPinia());
app.use(router)

app.mount('#app');

// Initialize AOS
AOS.init();

