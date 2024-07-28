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
    let errorMessage = ref('')

    const router = useRouter();
    const bookingStore = useBookingStore();

    const navigateToPreview = () => {
        if (!fullName.value){
            errorMessage.value = "Please fill your Full name"
        }else if (!email.value) {
            errorMessage.value = "Please fill your Email"
            
        } else if(!phone.value) {
            errorMessage.value = "Please fill your Phone Number"
            
        }else if(!checkIn.value){
            errorMessage.value = "Please fill Check In Date"

        }
        else if(!checkOut.value){
            errorMessage.value = "Please fill Check Out Date"

        }
        else if(!guests.value){
            errorMessage.value = "Please fill number of guests"

        }
        else if(!roomType.value){
            errorMessage.value = "Please select Room Type"

        }
        else if(!numRooms.value){
            errorMessage.value = "Please fill number of rooms"

        }
        else if(!acceptTerms.value || !acceptPrivacy.value){
            errorMessage.value = "Please Accept terms"

        }
        else{
            errorMessage.value=""
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
        }  
    };
    const timeOut = setTimeout(() => {
        
    }, 5000);
    
</script>

<template>
    <main class="booking-img -mt-16 md:-mt-10 p-4">
        <form class="bookingForm text-slate-100 mx-auto p-4 md:w-8/12">
            <h2 class="text-4xl md:text-5xl text-center">Booking Form</h2>
            <hr class="mb-10 mt-2 h-1 w-6/12 mx-auto bg-slate-200">
            <p class="text-xl text-center">Fields <span class="text-slate-100">*</span> are required</p>

            <fieldset class="border p-4 rounded-md mb-5 text-lg">
                <legend>Basic Information</legend>
                <!-- Basic Information -->
                <div class="basic-grid md:grid md:grid-cols-3">
                    <div class="p-1 relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <input v-model="fullName" type="text" id="fullName" name="fullName" required placeholder="Full Name" class="p-1 border mb-1 rounded w-full">
                    </div>
                    
                    <div class="p-1 relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <input v-model="email" type="email" id="email" name="email" required placeholder="Email" class="p-1 border mb-1 rounded w-full">
                    </div>
                    
                    <div class="p-1 relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <input v-model="phone" type="tel" id="phone" name="phone" required placeholder="Phone" class="p-1 border mb-1 rounded w-full">
                    </div>      
                </div>
                   
            </fieldset>

            <fieldset class="border p-4 rounded-md mb-5 text-lg">
                <!-- Reservation Details -->
                <legend>Reservation Details</legend>
                <div class="reservation-grid md:grid md:grid-cols-3 md:gap-3">
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="checkIn">Check-in Date:</label>
                        <input v-model="checkIn" type="date" id="checkIn" name="checkIn" required class="p-1 border mb-1 rounded w-full">
                    </div>
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="checkOut">Check-out Date:</label>
                        <input v-model="checkOut" type="date" id="checkOut" name="checkOut" required class="p-1 border mb-1 rounded w-full">

                    </div>
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="guests">Number of Guests:</label>
                        <input v-model="guests" type="number" id="guests" name="guests" required class="p-1 border mb-1 rounded w-full">
                    </div>
                </div>
            </fieldset>
            
            <fieldset class="border p-4 rounded-md mb-5 text-lg">
                <!-- Room Preferences -->
                <legend>Room Preference</legend>
                <div class="preference-grid md:grid md:grid-cols-3 md:gap-3 items-end ">
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="roomType">Room Type</label>
                        <select v-model="roomType" id="roomType" name="roomType" required class="p-1 border text-slate-900 mb-1 rounded w-full">
                            <option value="">Room Type</option>
                            <option value="suite">Suite</option>
                            <option value="mini-suite">Mini Suite</option>
                            <option value="classic">Classic</option>
                            <option value="classic-plus">Classic Plus</option>
                            <option value="luxury-single">Luxury (Single Bed)</option>
                            <option value="luxury-twin">Luxury (Twin Bed)</option>
                            <option value="perly">Perly Suite</option>
                            <option value="bliss">Blissful Heaven</option>
                            <option value="marvel-bliss">Marvelous Bliss</option>
                        </select>
                    </div>
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="numRooms">Number of Rooms:</label>
                        <input v-model="numRooms" type="number" id="numRooms" name="numRooms" required placeholder="Number of Rooms"class="p-1 border mb-1 rounded w-full">
                    </div>
                    <div>
                        <label for="mealPlans" class="block mt-5 mb-0">Meal Plans:</label>
                        <select v-model="mealPlans" id="mealPlans" name="mealPlans" class="p-1 border mb-1 rounded w-full">
                            <option value="none">None</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="halfBoard">Half Board (Breakfast + Dinner)</option>
                            <option value="fullBoard">Full Board (Breakfast + Lunch + Dinner)</option>
                        </select>
                    </div>
                </div>                
            </fieldset>
           
            <fieldset class="border p-4 rounded-md mb-5 text-lg">
                <legend>Additional Services</legend>
                 <!-- Additional Services -->
                <div class="shuttle mb-5">
                    <label for="airportShuttle">Airport Shuttle: </label>
                    <input v-model="airportShuttle" type="checkbox" id="airportShuttle" name="airportShuttle">
                </div>
                
                <div class="md:grid md:grid-cols-2 gap-1">
                    <textarea v-model="tours" id="tours" name="tours" placeholder="Tours and Activities" class="p-1 border mb-1 rounded w-full"></textarea>

                    <textarea v-model="specialRequests" id="specialRequests" name="specialRequests" placeholder="Special Requests" class="p-1 border mb-1 rounded w-full"></textarea>
                </div>
                

            </fieldset>

            <fieldset class="border p-4 rounded-md mb-5 text-lg">
                <legend>Terms and Conditions</legend>
                 <!-- Terms and Conditions -->
                <div class="terms md:grid md:grid-cols-2 md:gap-3">
                    <p>
                        <input v-model="acceptTerms" type="checkbox" id="acceptTerms" name="acceptTerms" required> 
                        <label for="acceptTerms" class="text-sm md:text-lg"> I agree to the <a href="#" class="text-slate-100 underline">terms and conditions</a> </label>
                    </p>
                    <p>
                        <input v-model="acceptPrivacy"  type="checkbox" id="acceptPrivacy" name="acceptPrivacy" required> 
                        <label for="acceptPrivacy" class="text-sm md:text-lg"> I agree to the <a href="#" class="text-slate-100 underline">privacy policy</a> </label>
                    </p>
                </div>
                
            </fieldset>
           
            <div class="submit text-center">
                <!-- Submit Button -->
                <button @click="navigateToPreview" type="button" class="p-2 my-3 md:p-3 bg-orange-600 text-white text-xl tracking-wide font-serif rounded-md w-8/12 md:w-4/12 transition-all duration-500 hover:text-cyan-950 hover:bg-orange-300">Preview Booking</button>
            </div>
           
        </form>
        <div v-if="errorMessage"  class="error text-white bg-red-600 p-2 rounded w-9/12 mx-auto text-center"> {{ errorMessage }}</div>
    </main>
</template>

<style scoped>
    .booking-img{
        background: linear-gradient(to left, rgba(0, 0, 0, 0.959), rgba(0, 0, 0, 0.904)), url('../../assets/pearlygates/hero4.webp') no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment:fixed ;
    }
    input, select, textarea{
        color: rgb(255, 255, 255);
        background: none;
    }
    input::placeholder, textarea::placeholder{
        color: whitesmoke
    }
    
</style>