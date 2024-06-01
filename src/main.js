import './assets/main.css'
import 'aos/dist/aos.css';


import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'

import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import About from './views/AboutView.vue';
import Rooms from './views/RoomsView.vue';
import Contact from './views/ContactView.vue';
import RoomsDetail from './views/RoomsDetail.vue';
import Gallery from './views/GalleryView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about-us', component: About },
  { path: '/rooms', component: Rooms },
  { path: '/contact', component: Contact },
  { path: '/room_detail', component: RoomsDetail },
  { path: '/gallery', component: Gallery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition){
    // Always scrool to the top when navigating a new page
    return {top:0}
  }
});


const app = createApp(App)

app.use(router)

app.mount('#app');

// Initialize AOS
AOS.init();

