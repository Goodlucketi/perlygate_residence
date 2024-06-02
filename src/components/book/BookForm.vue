<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
    import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <main class="bookForm">
        <form class="bookingForm text-cyan-950 p-4 w-11/12 md:w-8/12 mx-auto">
            <h2 class="text-4xl md:text-5xl text-center">Booking Form</h2>
            <hr class="my-5 h-1 bg-slate-200">
            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <legend>Basic Information</legend>
                <!-- Basic Information -->
                <div class="p-2">
                    <input type="text" id="fullName" name="fullName" required placeholder="Full Name" class="p-2 border mb-2 rounded w-full">
                </div>
                
                <div class="p-2">
                    <input type="email" id="email" name="email" required placeholder="Email" class="p-2 border mb-2 rounded w-full">
                </div>
                
                <div class="p-2">
                    <input type="tel" id="phone" name="phone" required placeholder="Phone" class="p-2 border mb-2 rounded w-full">
                </div>         
            </fieldset>

            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <!-- Reservation Details -->
                <legend>Reservation Details</legend>
                <label for="checkIn">Check-in Date:</label>
                <input type="date" id="checkIn" name="checkIn" required class="p-2 border mb-2 rounded w-full">

                <label for="checkOut">Check-out Date:</label>
                <input type="date" id="checkOut" name="checkOut" required class="p-2 border mb-2 rounded w-full">

                <label for="guests">Number of Guests:</label>
                <input type="number" id="guests" name="guests" required class="p-2 border mb-2 rounded w-full">
            </fieldset>
            
            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <!-- Room Preferences -->
                <legend>Room Preference</legend>
                
                <select id="roomType" name="roomType" required class="p-2 border mb-2 rounded w-full">
                    <option value="">Room Type</option>
                    <option value="single">Suite</option>
                    <option value="double">Mini Suite</option>
                    <option value="suite">Classic</option>
                    <option value="suite">Classic Plus</option>
                    <option value="suite">Luxury</option>
                </select>

               
                <input type="number" id="numRooms" name="numRooms" required placeholder="Number of Rooms"class="p-2 border mb-2 rounded w-full">

                <textarea id="specialRequests" name="specialRequests" placeholder="Special Requests" class="p-2 border mb-2 rounded w-full"></textarea>
            </fieldset>
            
            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <legend>Payment Information</legend>
                 <!-- Payment Information -->
                
                <select id="paymentMethod" name="paymentMethod" required class="p-2 border mb-2 rounded w-full">
                    <option value="">Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="debitCard">Debit Card</option>
                    <option value="paypal">PayPal</option>
                </select>

                <div id="creditCardInfo">
                    
                    <input type="text" id="cardNumber" name="cardNumber" required placeholder="Card Number: XXXX XXXX XXXX XXXX" class="p-2 border mb-2 rounded w-full">

                    <input type="text" id="expiryDate" name="expiryDate" required placeholder="Expiry Date" class="p-2 border mb-2 rounded w-full">

                    <input type="text" id="cvv" name="cvv" required placeholder="CVV" class="p-2 border mb-2 rounded w-full">
                </div>
            </fieldset>
           
            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <legend>Additional Services</legend>
                 <!-- Additional Services -->
                <label for="airportShuttle">Airport Shuttle: </label>
                <input type="checkbox" id="airportShuttle" name="airportShuttle">

                <label for="mealPlans" class="block mt-5 mb-0">Meal Plans:</label>
                <select id="mealPlans" name="mealPlans" class="p-2 border mb-2 rounded w-full">
                    <option value="none">None</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="halfBoard">Half Board (Breakfast + Dinner)</option>
                    <option value="fullBoard">Full Board (Breakfast + Lunch + Dinner)</option>
                </select>

                <label for="tours">Tours and Activities:</label>
                <textarea id="tours" name="tours" class="p-2 border mb-2 rounded w-full"></textarea>

            </fieldset>

            <fieldset class="border p-4 rounded-md mb-10 text-lg">
                <legend>Terms and Conditions</legend>
                 <!-- Terms and Conditions -->
                <p>
                    <input type="checkbox" id="acceptTerms" name="acceptTerms" required> 
                    <label for="acceptTerms" class="text-sm md:text-lg"> I agree to the <a href="#" class="text-cyan-600">terms and conditions</a> </label>
                </p>
                <p>
                    <input type="checkbox" id="acceptPrivacy" name="acceptPrivacy" required> 
                    <label for="acceptPrivacy" class="text-sm md:text-lg"> I agree to the <a href="#" class="text-cyan-600">privacy policy</a> </label>
                </p>
            </fieldset>
           
            <div class="submit text-center">
                <!-- Submit Button -->
                <button type="submit" class="p-5 bg-orange-600 text-white text-xl tracking-widest font-serif rounded-md w-8/12 md:w-4/12 transition-all duration-500 hover:text-cyan-950 hover:bg-orange-300">BOOK</button>
            </div>
           
        </form>

    </main>
</template>

<style scoped>

</style>