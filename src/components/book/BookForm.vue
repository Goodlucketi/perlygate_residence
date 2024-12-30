<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
    import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

   
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { useBookingStore } from '@/stores/booking';

// Define your refs and form data here
    const bookingData = ref({
        fullName: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: '',
        numRooms: 1,
        acceptTerms: false,
        acceptPrivacy: false,
    })
    const errorMessage = ref('')

    const router = useRouter();
    const bookingStore = useBookingStore();

    // const clearErrorMessage = ()=>{
    //     errorMessage.value = ''
    // }
    const validateBooking = ()=>{
        if (!fullName.value) return "Please fill in your Full Name";
        if (!email.value) return "Please fill in your Email";
        if (!phone.value) return "Please fill in your Phone Number";
        if (!checkIn.value) return "Please fill in Check-In Date";
        if (!checkOut.value) return "Please fill in Check-Out Date";
        if (!guests.value) return "Please fill in the number of guests";
        if (!roomType.value) return "Please select a Room Type";
        if (!numRooms.value) return "Please fill in the number of rooms";
        if (!acceptTerms.value || !acceptPrivacy.value) return "Please accept the terms and privacy policy";
        return null;
    }
    const navigateToPreview = () => {
        const error = validateBooking()
        if (error){
            errorMessage.value = error
            setTimeout(() => {
                errorMessage.value = ''
            }, 5000);
        }
        else{
            errorMessage.value=""
            bookingStore.setBookingData({...bookingData.value});
            router.push('/preview')
        }  
    };
    
</script>

<template>
    <main class="booking-img -mt-16 md:-mt-10 p-4">
        <form class="bookingForm text-slate-100 mx-auto p-4 md:w-9/12 lg:w-8/12">
            <h2 class="text-4xl md:text-5xl text-center">Booking Form</h2>
            <hr class="mb-10 mt-2 h-1 w-6/12 mx-auto bg-slate-200">
            <p class="text-xl text-center">Fields <span class="text-slate-100">*</span> are required</p>

            <fieldset class="border text-base p-4 rounded-md mb-5 text-lg">
                <legend>Basic Information</legend>
                <!-- Basic Information -->
                <div class="basic-grid  md:grid md:grid-cols-3">
                    <div class="p-1 relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <input v-model="bookingData.fullName" type="text" id="fullName" name="fullName" required placeholder="Full Name" class="p-1 border mb-1 rounded w-full">
                    </div>
                    
                    <div class="p-1 relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <input v-model="bookingData.email" type="email" id="email" name="email" required placeholder="Email" class="p-1 border mb-1 rounded w-full">
                    </div>
                    
                    <div class="p-1 relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <input v-model="bookingData.phone" type="tel" id="phone" name="phone" required placeholder="Phone" class="p-1 border mb-1 rounded w-full">
                    </div>      
                </div>
                   
            </fieldset>

            <fieldset class="border text-base p-4 rounded-md mb-5 text-lg">
                <!-- Reservation Details -->
                <legend>Reservation Details</legend>
                <div class="reservation-grid md:grid md:grid-cols-3 md:gap-3">
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="checkIn">Check-in Date:</label>
                        <input v-model="bookingData.checkIn" type="date" id="checkIn" name="checkIn" required class="p-1 border mb-1 rounded w-full">
                    </div>
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="checkOut">Check-out Date:</label>
                        <input v-model="bookingData.checkOut" type="date" id="checkOut" name="checkOut" required class="p-1 border mb-1 rounded w-full">

                    </div>
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="guests">Number of Guests:</label>
                        <input v-model="bookingData.guests" type="number" id="guests" name="guests" required class="p-1 border mb-1 rounded w-full">
                    </div>
                </div>
            </fieldset>
            
            <fieldset class="border text-base p-4 rounded mb-5 text-lg">
                <!-- Room Preferences -->
                <legend>Room Preference</legend>
                <div class="preference-grid md:grid md:grid-cols-2 md:gap-3 items-end ">
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="roomType">Room Type</label>
                        <select v-model="bookingData.roomType" id="roomType" name="roomType" required class="p-1 border mb-1 rounded-md w-full">
                            <option class="bg-slate-900" value="">Room Type</option>
                            <option class="bg-slate-900" value="suite">Suite</option>
                            <option class="bg-slate-900" value="mini-suite">Mini Suite</option>
                            <option class="bg-slate-900" value="classic">Classic</option>
                            <option class="bg-slate-900" value="classic-plus">Classic Plus</option>
                            <option class="bg-slate-900" value="luxury-twin">Luxury (Twin Bed)</option>
                            <option class="bg-slate-900" value="bliss">Blissful Heaven</option>
                            <option class="bg-slate-900" value="marvel-bliss">Marvelous Suite</option>
                        </select>
                    </div>
                    <div class="relative">
                        <span class="text-slate-100 text-xl absolute -left-2 md:-top-5">*</span>
                        <label for="numRooms">Number of Rooms:</label>
                        <input v-model="bookingData.numRooms" type="number" id="numRooms" name="numRooms" required placeholder="Number of Rooms" class="p-1 border mb-1 rounded w-full">
                    </div>
                </div>                
            </fieldset>
           
            <fieldset class="border text-base p-4 rounded-md mb-5 text-lg">
                <legend>Terms and Conditions</legend>
                 <!-- Terms and Conditions -->
                <div class="terms md:grid md:grid-cols-2 md:gap-3">
                    <p>
                        <input v-model="bookingData.acceptTerms" type="checkbox" id="acceptTerms" name="acceptTerms" required> 
                        <label for="acceptTerms" class="text-sm md:text-lg"> I agree to the <a href="#" class="text-slate-100 underline">terms and conditions</a> </label>
                    </p>
                    <p>
                        <input v-model="bookingData.acceptPrivacy"  type="checkbox" id="acceptPrivacy" name="acceptPrivacy" required> 
                        <label for="acceptPrivacy" class="text-sm md:text-lg"> I agree to the <a href="#" class="text-slate-100 underline">privacy policy</a> </label>
                    </p>
                </div>
                
            </fieldset>
           
            <div class="submit text-center">
                <!-- Submit Button -->
                <button @click="navigateToPreview" type="button" class="p-2 my-3 md:p-3 bg-orange-600 text-white text-xl tracking-wide font-serif rounded-md w-8/12 md:w-4/12 transition-all duration-500 hover:text-cyan-950 hover:bg-orange-300">Preview Booking</button>
            </div>
           
        </form>
        <div v-if="errorMessage"  class="error text-white bg-red-600 p-2 rounded w-9/12 md:w-3/12 mx-auto text-center"> {{ errorMessage }}</div>
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