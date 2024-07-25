<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
    import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

   
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { useBookingStore } from '@/stores/booking';

// Define your refs and form data here
    const fullName = ref('');
    const email = ref('');
    const phone = ref('');
    const checkIn = ref('');
    const checkOut = ref('');
    const guests = ref(1);
    const roomType = ref('');
    const numRooms = ref(1);
    const specialRequests = ref('');
    const airportShuttle = ref(false);
    const mealPlans = ref('none');
    const tours = ref('');
    const acceptTerms = ref(false);
    const acceptPrivacy = ref(false);

    const router = useRouter();
    const bookingStore = useBookingStore();

    const navigateToPreview = () => {
        const bookingData = {
            fullName: fullName.value,
            email: email.value,
            phone: phone.value,
            checkIn: checkIn.value,
            checkOut: checkOut.value,
            guests: guests.value,
            roomType: roomType.value,
            numRooms: numRooms.value,
            specialRequests: specialRequests.value,
            airportShuttle: airportShuttle.value,
            mealPlans: mealPlans.value,
            tours: tours.value,
            acceptTerms: acceptTerms.value,
            acceptPrivacy: acceptPrivacy.value,
        };
       
            bookingStore.setBookingData(bookingData);
            router.push('/preview')
           
    };
    
</script>

<template>
    <main class="bookForm my-10">
        <form class="bookingForm text-cyan-950 p-4 w-11/12 md:w-8/12 mx-auto">
            <h2 class="text-4xl md:text-5xl text-center">Booking Form</h2>
            <hr class="my-5 h-1 bg-slate-200">
            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <legend>Basic Information</legend>
                <!-- Basic Information -->
                <div class="p-2">
                    <input v-model="fullName" type="text" id="fullName" name="fullName" required placeholder="Full Name" class="p-2 border mb-1 rounded w-full">
                </div>
                
                <div class="p-2">
                    <input v-model="email" type="email" id="email" name="email" required placeholder="Email" class="p-2 border mb-1 rounded w-full">
                </div>
                
                <div class="p-2">
                    <input v-model="phone" type="tel" id="phone" name="phone" required placeholder="Phone" class="p-2 border mb-1 rounded w-full">
                </div>         
            </fieldset>

            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <!-- Reservation Details -->
                <legend>Reservation Details</legend>
                <label for="checkIn">Check-in Date:</label>
                <input v-model="checkIn" type="date" id="checkIn" name="checkIn" required class="p-2 border mb-1 rounded w-full">

                <label for="checkOut">Check-out Date:</label>
                <input v-model="checkOut" type="date" id="checkOut" name="checkOut" required class="p-2 border mb-1 rounded w-full">

                <label for="guests">Number of Guests:</label>
                <input v-model="guests" type="number" id="guests" name="guests" required class="p-2 border mb-1 rounded w-full">
            </fieldset>
            
            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <!-- Room Preferences -->
                <legend>Room Preference</legend>
                
                <select v-model="roomType" id="roomType" name="roomType" required class="p-2 border mb-1 rounded w-full">
                    <option value="">Room Type</option>
                    <option value="suite">Suite</option>
                    <option value="mini-suite">Mini Suite</option>
                    <option value="classic">Classic</option>
                    <option value="classic-plus">Classic Plus</option>
                    <option value="luxury">Luxury</option>
                </select>

                <label for="numRooms">Number of Rooms:</label>
                <input v-model="numRooms" type="number" id="numRooms" name="numRooms" required placeholder="Number of Rooms"class="p-2 border mb-1 rounded w-full">

                <textarea v-model="specialRequests" id="specialRequests" name="specialRequests" placeholder="Special Requests" class="p-2 border mb-1 rounded w-full"></textarea>
            </fieldset>
           
            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <legend>Additional Services</legend>
                 <!-- Additional Services -->
                <label for="airportShuttle">Airport Shuttle: </label>
                <input v-model="airportShuttle" type="checkbox" id="airportShuttle" name="airportShuttle">

                <label for="mealPlans" class="block mt-5 mb-0">Meal Plans:</label>
                <select v-model="mealPlans" id="mealPlans" name="mealPlans" class="p-2 border mb-1 rounded w-full">
                    <option value="none">None</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="halfBoard">Half Board (Breakfast + Dinner)</option>
                    <option value="fullBoard">Full Board (Breakfast + Lunch + Dinner)</option>
                </select>

                <label for="tours">Tours and Activities:</label>
                <textarea v-model="tours" id="tours" name="tours" class="p-2 border mb-1 rounded w-full"></textarea>

            </fieldset>

            <fieldset class="border p-4 rounded-md mb-5 text-lg">
                <legend>Terms and Conditions</legend>
                 <!-- Terms and Conditions -->
                <p>
                    <input v-model="acceptTerms" type="checkbox" id="acceptTerms" name="acceptTerms" required> 
                    <label for="acceptTerms" class="text-sm md:text-lg"> I agree to the <a href="#" class="text-cyan-600">terms and conditions</a> </label>
                </p>
                <p>
                    <input v-model="acceptPrivacy" type="checkbox" id="acceptPrivacy" name="acceptPrivacy" required> 
                    <label for="acceptPrivacy" class="text-sm md:text-lg"> I agree to the <a href="#" class="text-cyan-600">privacy policy</a> </label>
                </p>
            </fieldset>
           
            <div class="submit text-center">
                <!-- Submit Button -->
                <button @click="navigateToPreview" type="button" class="p-3 md:p-5 bg-orange-600 text-white text-xl tracking-widest font-serif rounded-md w-8/12 md:w-4/12 transition-all duration-500 hover:text-cyan-950 hover:bg-orange-300">Preview Booking</button>
            </div>
           
        </form>

    </main>
</template>

<style scoped>

</style>