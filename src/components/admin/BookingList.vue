<script setup>
    import { ref, onMounted, computed } from 'vue';

    
    const bookings = ref([]);
    const loading = ref(false);
    const filterInput = ref("");
    const sortKey = ref(null)
    const sortDirection = ref("asc")
    
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

    const sortedFilteredData = computed(()=>{
        let filteredData = bookings.value.filter((booking) => {
            return booking.fullname.toLowerCase().includes(filterInput.value.toLowerCase())
        })

        if(sortKey.value){
            filteredData = filteredData.sort((a,b)=>{
                
                if (sortKey.value === 'check_in' || sortKey.value === 'check_out') {
                    const aDate = new Date(a[sortKey.value]);
                    const bDate = new Date(b[sortKey.value]);
                    return sortDirection.value === "asc" ? aDate - bDate : bDate - aDate;
                }

                if (a[sortKey.value] < b[sortKey.value]) {
                    return sortDirection.value === "asc" ? -1 : 1;
                }
                if (a[sortKey.value] > b[sortKey.value]) {
                    return sortDirection.value === "asc" ? 1 : -1;
                }
                return 0;
            })
        }
        return filteredData
    })

    const sortTable = (key) => {
        if (sortKey.value === key) {
            sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
        } else {
            sortKey.value = key;
            sortDirection.value = "asc";
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
    <main class="">
        <div class="mb-4">
            <!-- Filter Input -->
            <div class="flex items-center justify-between bg-slate-200 py-2 px-10 rounded-md">
                <h2 class="text-lg font-bold">PearlyGate Admin</h2>
                <input
                    v-model="filterInput"
                    type="text"
                    placeholder="Search by Name"
                    class="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-xs"
                />
            </div>
        </div>
        <div class="mx-auto overflow-x-auto w-[94%]">
            <h2 class="font-bold text-xl text-center text-slate-800 p-2">Booking List</h2>
            <div v-if="loading">
                <div class="loading text-sm text-center flex flex-col justify-center">PearlyGates</div>
            </div>

            <table v-else class="border-collapse border shadow-md rounded-lg">
                <thead class="bg-white">
                    <tr>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700" @click="sortTable('id')">
                            ID
                            <span v-if="sortKey === 'id'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700" @click="sortTable('name')">
                            Name
                            <span v-if="sortKey === 'name'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700" @click="sortTable('email')">
                            Email
                            <span v-if="sortKey === 'email'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700" @click="sortTable('phone')">
                            Phone
                            <span v-if="sortKey === 'phone'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700">Room Type
                            <span v-if="sorkKey === 'roomType'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700">No. of Rooms
                            <span v-if="sorkKey === 'numRooms'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700">Guests</th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700" @click="sortTable('check_in')">Check In
                            <span v-if="sortKey === 'checkIn'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-left px-4 py-2 text-sm font-medium text-gray-700" @click="sortTable('check_out')">Check Out
                            <span v-if="sortKey === 'checkOut'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700">Booking Date
                            <span v-if="sorkKey === 'bookDate'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700">Total Cost
                            <span v-if="sorkKey === 'total'">{{ sortDirection === 'asc' ? '🔼' : '🔽' }}</span>
                            <span v-else>🔽</span>
                        </th>
                        <th class="whitespace-nowrap text-center px-4 py-2 text-sm font-medium text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for= "booking, index in sortedFilteredData" :key="booking.id" :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
                        <td class="whitespace-nowrap text-center">{{ index + 1 }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.fullname }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.email }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.phone }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.room_type.toUpperCase() }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.num_of_rooms }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.guests }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.check_in }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.check_out }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.book_date }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">{{ booking.total_cost }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-sm">
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

     
    .loading{
        border-radius: 50%;
        border: 10px groove rgb(9, 2, 41);
        animation: loading 2s ease infinite;
        width: 100px;
        height: 100px;
        position: absolute;
        top:50%;
        left: 45%;
        transition: all linear ease;
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
