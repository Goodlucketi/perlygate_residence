<script setup>
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useBookingStore } from '@/stores/booking';

    import { db } from '@/firebase';
    import { collection, addDoc } from 'firebase/firestore';


    const router = useRouter();
    const bookingStore = useBookingStore()
    const bookingData = bookingStore.bookingData;
    const loading = ref(false)
    const errorMessage = ref('')
    // Calculate total cost (example calculation, adjust as needed)
    const totalCost = computed(() => {
        
        let cost = 0;
        if (bookingData.roomType === 'suite') cost += 65000;
        if (bookingData.roomType === 'mini-suite') cost += 50000;
        if (bookingData.roomType === 'classic') cost += 30000;
        if (bookingData.roomType === 'classic-plus') cost += 35000;
        if (bookingData.roomType === 'luxury-single') cost += 40000;
        if (bookingData.roomType === 'luxury-twin') cost += 45000;
        if (bookingData.roomType === 'perly') cost += 55000;
        if (bookingData.roomType === 'bliss') cost += 60000;
        if (bookingData.roomType === 'marvel-bliss') cost += 70000;
    
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
        loading.value=true;
        try {
            await addDoc(collection(db, 'bookings'), {
            ...bookingData,
            totalCost: totalCost.value,
            createdAt: new Date(),
            });

            router.push('/book_success');

        } catch (error) {
            // Handle specific errors
            if (error.code === 'unavailable') {
            // Firebase network error
            errorMessage.value = 'Network error. Please check your internet connection and try again.';
            } else if (error.code === 'permission-denied') {
            // Firebase permission error
            errorMessage.value = 'Permission denied. Please ensure you have the required permissions and try again.';
            } else {
            // General error
            errorMessage.value = 'Failed to submit booking. Please try again.';
            }
            console.error('Error submitting booking:', errorMessage.value);
        }
        finally{
            loading.value=false;
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
        <div v-if="loading" class="bg absolute top-[10%] left-0 w-full h-screen text-2xl text-black p-32 bg-slate-900/75"></div>
        <div v-if="loading" class="loading text-sm text-center flex flex-col justify-center" >
            <p >PearlyGates</p>
        </div>
        <div v-if="errorMessage" class="error-message text-red-600 mt-10">{{ errorMessage }}</div>
    </div>
  </template>
  
  
  
  <style scoped>
  /* Add your styles here */
  .loading{
        border-radius: 50%;
        border: 10px groove rgb(9, 2, 41);
        animation: loading 2s ease infinite;
        width: 100px;
        height: 100px;
        position: absolute;
        top:50%;
        left: 40%;
        transition: all linear ease;
    }

    @keyframes loading {
        0%{
            transform: rotate(30deg);
            border-color: aliceblue;
            color: rgb(245, 245, 247);
        }
       
        35%{
            transform: rotate(90deg);
            border-color: rgb(49, 66, 80);
            color: rgb(158, 236, 200);

        }

        70%{
            transform: rotate(180deg);
            border-color: rgb(137, 212, 114);
            color: rgb(241, 216, 132);
        }
        100%{
            border-color: rgb(243, 138, 120);
            transform: rotate(360deg);
            color: rgb(233, 173, 124);
        }
        
    }

  </style>
  