import { defineStore } from 'pinia';

export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookingData: {}
  }),
  actions: {
    setBookingData(data) {
      this.bookingData = data;
    },
    hasBookingData() {
        return Object.keys(this.bookingData).length >0
    }
  }
});
