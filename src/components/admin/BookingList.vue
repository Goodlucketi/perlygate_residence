<script setup>
    import { ref, onMounted } from 'vue';
    import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
    import { db } from '@/firebase';
    
    const bookings = ref([]);
    const loading = ref(true);
    
    const fetchBookings = async () => {
        try {
        const querySnapshot = await getDocs(collection(db, 'bookings'));
        bookings.value = querySnapshot.docs.map(doc => 
        ({ 
            id: doc.id, ...doc.data(),
            createdAt: doc.data().createdAt.toDate().toLocaleDateString(),
        }));
        
        // console.log(bookings.value);
        } 
        catch (error) {
        console.error('Error fetching bookings:', error);
        } 
        finally {
        loading.value = false;
        }
    };
    
    const deleteBooking = async (id) => {
        try {
            await deleteDoc(doc(db, 'bookings', id));
            bookings.value = bookings.value.filter(booking => booking.id !== id);
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
        };

    const editBooking = (booking) => {
        // Implement the edit booking functionality
        // You may want to navigate to a booking edit page and pass the booking data
        router.push('/editBooking', { params: { bookingId: booking.id } });
    };
    onMounted(() => {
        fetchBookings();
    });
</script>

<template>
    <main class="p-4 mx-auto overflow-auto">
        <div v-if="loading">
            <div class="loading text-sm text-center flex flex-col justify-center">PearlyGates</div>
        </div>
        <table class="border-collapse" v-else >
            <thead>
                <th class=" equal-width">Client Name</th>
                <th class=" equal-width">Email</th>
                <th class=" equal-width">Phone</th>
                <th class=" equal-width">Room Type</th>
                <th class=" equal-width">Number of Rooms</th>
                <th class=" equal-width">Guests</th>
                <th class=" equal-width">Meal Plan</th>
                <th class=" equal-width">Check In</th>
                <th class=" equal-width">Check Out</th>
                <th class=" equal-width">Booking Date Plan</th>
                <th class=" equal-width">Airport Shuttle</th>
                <th class=" equal-width">Special Requests</th>
                <th class=" equal-width">Tours</th>
                <th class=" equal-width">Total Cost</th>
                <th class=" equal-width">Action</th>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" :key="booking.id">
                    <td class=" equal-width">{{ booking.fullName }}</td>
                    <td class=" equal-width">{{ booking.email }}</td>
                    <td class=" equal-width">{{ booking.phone }}</td>
                    <td class=" equal-width">{{ booking.roomType }}</td>
                    <td class=" equal-width">{{ booking.numRooms }}</td>
                    <td class=" equal-width">{{ booking.guests }}</td>
                    <td class=" equal-width">{{ booking.mealPlans }}</td>
                    <td class=" equal-width">{{ booking.checkIn }}</td>
                    <td class=" equal-width">{{ booking.checkOut }}</td>
                    <td class=" equal-width">{{ booking.createdAt }}</td>
                    <td class=" equal-width">{{ booking.airportShuttle }}</td>
                    <td class=" equal-width">{{ booking.specialRequests }}</td>
                    <td class=" equal-width">{{ booking.tours }}</td>
                    <td class=" equal-width">{{ booking.totalCost }}</td>
                    <td class=" equal-width">
                        <button class="mx-5" @click="deleteBooking(booking.id)">❌</button>
                        <button class="mx-5" @click="editBooking(booking)">📝</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>
<style scoped>
    tr:nth-child(odd){
        background: rgb(131, 162, 182);
    }
  
    .loading{
        border-radius: 50%;
        border: 10px groove rgb(9, 2, 41);
        animation: loading 2s ease infinite;
        width: 100px;
        height: 100px;
        position: absolute;
        top:50%;
        left: 55%;
        transition: all linear ease;
    }
    th, td{
        white-space: nowrap;
        text-align: left;
        padding: 5px 10px;
        border: 1px solid rgba(182, 175, 175, 0.295);
    }

    @keyframes loading {
        0%{
            transform: rotate(30deg);
            border-color: aliceblue;
            color: rgb(17, 17, 58);
        }
       
        35%{
            transform: rotate(90deg);
            border-color: rgb(49, 66, 80);
            color: rgb(3, 85, 47);

        }

        70%{
            transform: rotate(180deg);
            border-color: rgb(137, 212, 114);
            color: rgb(19, 192, 62);
        }
        100%{
            border-color: rgb(243, 138, 120);
            transform: rotate(360deg);
            color: rgb(203, 228, 63);
        }
        
    }

</style>
