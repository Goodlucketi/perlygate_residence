<script setup>
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useBookingStore } from '@/stores/booking';

    import { db } from '@/firebase';
    import { collection, addDoc } from 'firebase/firestore';


    const router = useRouter();
    const bookingStore = useBookingStore()
    const bookingData = bookingStore.bookingData;
    
    // Calculate total cost (example calculation, adjust as needed)
    const totalCost = computed(() => {
        let cost = 0;
        if (bookingData.roomType === 'suite') cost += 100;
        if (bookingData.roomType === 'mini-suite') cost += 80;
        if (bookingData.roomType === 'classic') cost += 60;
        if (bookingData.roomType === 'classic-plus') cost += 70;
        if (bookingData.roomType === 'luxury') cost += 120;
    
        cost *= bookingData.numRooms;
        const days = (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24);
        cost *= days;
    
        if (bookingData.airportShuttle) cost += 20;
        if (bookingData.mealPlans === 'breakfast') cost += 10;
        if (bookingData.mealPlans === 'halfBoard') cost += 20;
        if (bookingData.mealPlans === 'fullBoard') cost += 30;
    
        return cost;
    });
  
    const confirmBooking = async () => {
        try {
            await addDoc(collection(db, 'bookings'), {
            ...bookingData,
            totalCost: totalCost.value,
            createdAt: new Date(),
            });

            router.push('/book_success');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('An error occurred while submitting the booking.');
        }
    };
    
    const editBooking = () => {
        router.push('/booking');
    };
  </script>


<template>
    <div class="booking-preview my-36 p-4 mx-auto w-11/12">
        <div class="preview ">
            <h2 class="font-bold text-2xl text-center text-cyan-700 mb-3">Booking Preview</h2>

            <table class="mb-1-2 w-11/12 md:w-7/12 mx-auto rounded-md my-5">
                <tr>
                    <td class="p-1 mb-1"><strong>Full Name:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.fullName }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Email:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.email }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Phone:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.phone }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Check-in Date:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.checkIn }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Check-out Date:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.checkOut }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Guests:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.guests }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Room Type:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.roomType }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Number of Rooms:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.numRooms }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Special Requests:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.specialRequests }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Airport Shuttle:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.airportShuttle }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Meal Plans:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.mealPlans }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Tours:</strong></td>
                    <td class="p-1 mb-1"> {{ bookingData.tours }}</td>
                </tr>
                <tr>
                    <td class="p-1 mb-1"><strong>Total Cost:</strong></td>
                    <td class="p-1 mb-1 font-bold text-2xl text-green-800"> N{{ totalCost }}</td>
                </tr>
                
            </table>
            <div class="text-center">
                <button @click="editBooking" class="p-2 bg-cyan-800 text-white mx-2 rounded-md">Edit Booking</button>
                <button @click.prevent()="confirmBooking" class="p-2 bg-green-800 text-white mx-2 rounded-md">Confirm Booking</button>
            </div>
            
        </div>
        
    </div>
  </template>
  
  
  
  <style scoped>
  /* Add your styles here */
  </style>
  