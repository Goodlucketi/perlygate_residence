import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BookingPreview from '@/views/BookingPreview.vue';
import BookingView from '@/views/BookingView';
import BookingSuccess from '@/views/BookSuccess.vue'
import { useBookingStore } from '@/stores/booking';

// import RoomsView from '../views/RoomsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/booking',
      name: 'booking',
      component: BookingView
    },

    {
      path: '/preview',
      name: 'BookingPreview',
      component: BookingPreview,
      meta: {requiresBookingData:true},
    },

    {
      path: '/book_success',
      name: 'BookingSuccess',
      component: BookingSuccess,
      meta: {requiresBookingData:true},

    }
  ]
});

router.beforeEach((tp, from, next)=> {
  const bookingStore = useBookingStore();
  if(toString.meta.requiresBookingData && !bookingStore.hasBookingData()) {
    next({ name: 'booking'})
  }else{
    next()
  }
})

export default router
