<script setup>
    import { ref, onMounted } from 'vue';

    
    const bookings = ref([]);
    const loading = ref(false);
    
    const fetchBookings = async () => {
        loading.value = true; // Set loading to true at the start
        try {
            const response = await fetch('https://perlygatesresidence.com/backend/perlygates/controllers/bookings.php')

            if(!response.ok){
                throw new Error(response.error || 'Failed to fetch quizzes.');
            }

            const data = await response.json()
            bookings.value = data.clients

            console.log(bookings);
            
        } 
        catch (error) {
        console.error('Error fetching bookings:', error);
        } 
        finally {
        loading.value = false;
        }
    };

    const confirmBooking = async (id) =>{
        try {
            console.log("Booking Confirmed")
        } catch (error) {
            console.error("Can't confirm booking now, Please try again", error)
        }
    }
    
    const rejectBooking = async (id) => {
        try {
           console.log("Booking Deleted");
           
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
        };

    const updateBooking = (booking) => {
        console.log("Booking Edited");
        ;
    };
    onMounted(() => {
        fetchBookings();
    });
</script>

<template>
    <main class="p-4 w-11/12 mx-auto">
        <h2 class="text-3xl font-bold my-5 py-10 text-center ">Booking List</h2>
        <div class="mx-auto overflow-auto">
            <div v-if="loading">
                <div class="loading text-sm text-center flex flex-col justify-center">PearlyGates</div>
            </div>
            
            <table class="border-collapse" v-else >
                <thead>
                    <th class="">S/N </th>
                    <th class=" equal-width">Client Name</th>
                    <th class=" equal-width">Email</th>
                    <th class=" equal-width">Phone</th>
                    <th class=" equal-width">Room Type</th>
                    <th class=" equal-width">Number of Rooms</th>
                    <th class=" equal-width">Guests</th>
                    <th class=" equal-width">Check In</th>
                    <th class=" equal-width">Check Out</th>
                    <th class=" equal-width">Booking Date</th>
                    <th class=" equal-width">Total Cost</th>
                    <th class=" equal-width">Action</th>
                </thead>
                <tbody>
                    <tr v-for= "booking, index in bookings" :key="booking.id">
                        <td>{{ index + 1 }}</td>
                        <td class=" equal-width">{{ booking.fullname }}</td>
                        <td class=" equal-width">{{ booking.email }}</td>
                        <td class=" equal-width">{{ booking.phone }}</td>
                        <td class=" equal-width">{{ booking.room_type }}</td>
                        <td class=" equal-width">{{ booking.num_of_rooms }}</td>
                        <td class=" equal-width">{{ booking.guests }}</td>
                        <td class=" equal-width">{{ booking.check_in }}</td>
                        <td class=" equal-width">{{ booking.check_out }}</td>
                        <td class=" equal-width">{{ booking.book_date }}</td>
                        <td class=" equal-width">{{ booking.total_cost }}</td>
                        <td class=" equal-width">
                            <button class="mx-5" title="Reject Booking" @click="rejectBooking(booking.id)">❌</button>
                            <button class="mx-5" title="Confirm Booking" @click="confirmBooking(booking.id)">✔</button>
                            <button class="mx-5" title="Update Booking" @click="updateBooking(booking.id)">📝</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>
<style scoped>
    tr:nth-child(odd){
        background: rgb(131, 162, 182);
    }
    td:nth-child(odd){
        background: rgb(207, 226, 240);
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
        /* border: 1px solid rgba(182, 175, 175, 0.295); */
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
