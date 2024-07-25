<script setup>
    import { toRefs } from 'vue';
    import { useBookingStore } from '@/stores/booking';

    const bookingStore = useBookingStore();
    const { bookingData } = toRefs(bookingStore);
</script>
<template>
    <div class="flex flex-col items-center bg-slate-200 h-screen mx-auto">
        <div class="success my-auto bg-green-600 p-4 rounded-md text-slate-100 shadow-xl w-10/12 mx-auto">
            <h2 class="text-2xl font-bold my-5 text-center">BOOKING SUCCESSFUL</h2>
            <p class="mb-2">Your booking has been received and Reservations will be made</p>
            <p class="mb-2">An email will be sent to you with details of your reservation. Thank you!!</p>
            <p class="mb-2 text-center font-bold">Back to <router-link to="/">Homepage</router-link></p>
        </div>
       
    </div>
</template>
<style scoped></style>