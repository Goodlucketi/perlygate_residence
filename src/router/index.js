import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Rooms from '@/views/RoomsView.vue';
import Contact from '@/views/ContactView.vue';
import RoomsDetail from '@/views/RoomsDetail.vue';
import Gallery from '@/views/GalleryView.vue';
import Booking from '@/views/BookingView.vue';
import BookingPreview from '@/views/BookingPreview.vue';
import BookSuccess from '@/views/BookSuccess.vue'
import Admin from '@/components/admin/adminPortal.vue'
import { useBookingStore } from '@/stores/booking';


const routes = [
  { 
    path: '/', 
    component: Home, 
    name:Home
  },

  { 
    path: '/about-us', 
    component: About, 
    name:About 
  },

  { 
    path: '/rooms', 
    component: Rooms, 
    name:Rooms 
  },

  { 
    path: '/contact', 
    component: Contact, 
    name:Contact 
  },
  
  { 
    path: '/room_detail', 
    component: RoomsDetail, 
    name: RoomsDetail },

  { 
    path: '/gallery', 
    component: Gallery, 
    name:Gallery 
  },
  
  { 
    path: '/booking', 
    component: Booking, 
    name:Booking 
  },

  { 
    path: '/preview', 
    component: BookingPreview,
    name:BookingPreview,
    beforeEnter: (to, from, next) => {
      const bookingStore = useBookingStore();
      if (!bookingStore.hasBookingData()) {
        next('/booking');
      } else {
        next();
      }
    }
  },

  { 
    path: '/book_success',
    component: BookSuccess,
    name:BookSuccess,
    beforeEnter: (to, from, next) => {
      const bookingStore = useBookingStore();
      if (!bookingStore.hasBookingData()) {
        next('/booking');
      } else {
        next();
      }
    }
  },

  {
    path: '/admin',
    component: Admin,
    name:Admin
  }
];




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition){
    // Always scrool to the top when navigating a new page
    return {top:0}
  }
});


export default router
