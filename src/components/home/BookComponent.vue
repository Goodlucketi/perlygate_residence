<script setup>
  
    import { ref } from 'vue'

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
    import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

</script>

<template>
    <main class="my-10 md:my-20 relative">
        <div class="book-container mx-auto">
            <div class="book bg-orange-600 p-6 md:p-10">
                <h2 class="text-center text-3xl text-white font-bold my-5 ">Book Now</h2>
                <div class="bookform mx-auto">
                    <form class="text-center">
                        <label class="relative">
                            <input type="date" name="arrival" id="arrival" class="p-3 md:mx-4 md:inline rounded block w-full my-2 md:w-2/12 no-placeholder bg-slate-900/25 border rounded" v-model="selectedDate" @focus="showCalendar" @click="showCalendar">
                            <span class="absolute top-5 -left-40 md:left-10 md:top-0 font-bold font-sans text-white">Arrival</span>
                            <span class="absolute top-5 right-5 md:top-0 md:right-7  text-white"><FontAwesomeIcon :icon="faCalendar"/></span>
                        </label>
                        
                        <label class="relative">
                            <input type="date" name="departure" id="departure" class="p-3 md:mx-4 rounded block md:inline w-full my-2 md:w-2/12 no-placeholder bg-slate-900/25 border rounded" v-model="selectedDate" @focus="showCalendar" @click="showCalendar">
                            <span class="absolute top-5 -left-40 md:left-10 md:top-0 font-bold font-sans text-white">Departure</span>
                            <span class="absolute top-5 right-5 md:top-0 md:right-7 text-white"><FontAwesomeIcon :icon="faCalendar"/></span>
                        </label>
                        
                        <label class="relative">
                            <select name="guests" id="guests" class="no-arrow p-3 md:mx-4 rounded block md:inline w-full my-2 md:w-2/12 bg-slate-900/25 text-white border rounded " >
                            <option value="1">1 guest</option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                            <option value="5">5 guests</option>
                            <option value="6">6 guests</option>
                            <option value="7">7 guests</option>
                            <option value="8">8 guests</option>
                            </select>
                            <span class="absolute top-5 right-5 md:top-0 md:right-7 text-white"><FontAwesomeIcon :icon="faUser"/></span>
                        </label>
                        
                        <input type="submit" value="Book >" class="p-3 md:mx-4 rounded block md:inline w-full my-2 md:w-3/12 bg-orange-900 text-slate-100 font-bold transition-all duration-500 hover:bg-slate-100 hover:text-orange-900">
                    </form>
                </div>
            </div>
            <div class="map-location w-11/12 mx-auto my-10 md:flex md:justify-center md:items-start md:gap-10 md:my-20">
                <div class="map md:w-6/12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.287174946338!2d7.906446908147893!3d5.057126238448417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d577ad2c61da3%3A0x35de29cdcd1a2bb1!2sPerly%20Gate%20Residence!5e0!3m2!1sen!2sng!4v1716981503218!5m2!1sen!2sng" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full md:h-72"></iframe>
                </div>
                <div class="location">
                    <div class="address mb-10">
                        <p class="p-1 font-bold text-xl">PERLY GATE RESIDENCE</p> 
                        <p class="p-1">120 Calabar Itu Highway, Uyo, Akwa Ibom State, 520101, Nigeria</p>    
                        <p class="p-1">T +23470876680366</p>
                        <p class="p-1">E reservations@perlygateresidence.com</p>
                    </div>
                    <router-link to="/" class="rounded-full bg-orange-600 p-4 text-white ">LEARN MORE ></router-link>

                </div>

            </div>
        </div>
        <hr class="w-6/12 mx-auto h-1 bg-slate-400 my-10">
    </main>
</template>

<style scoped>
  .no-placeholder::-webkit-datetime-edit-fields-wrapper {
    opacity: 0;
  }

  .no-placeholder::-webkit-datetime-edit-text {
    opacity: 0;
  }

  .no-placeholder::-webkit-datetime-edit-month-field {
    opacity: 0;
  }

  .no-placeholder::-webkit-datetime-edit-day-field {
    opacity: 0;
  }

  .no-placeholder::-webkit-datetime-edit-year-field {
    opacity: 0;
  }

  .no-placeholder::-webkit-calendar-picker-indicator {
    opacity: 0;
}

.no-arrow{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
</style>