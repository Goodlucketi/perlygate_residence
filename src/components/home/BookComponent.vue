<script setup>
  
    import { ref } from 'vue'
    import MapComponent from './MapComponent.vue'
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
                    <form action="https://app.thebookingbutton.com/properties/perlygateresidencedirect" method="get" class="text-center">
                        <label class="relative block md:inline">
                            <input type="date" name="arrival" id="arrival" class="p-3 md:mx-4 md:inline rounded block w-full my-2 md:w-2/12 no-placeholder bg-slate-900/25 border rounded" v-model="selectedDate" @focus="showCalendar" @click="showCalendar">
                            <span class="absolute top-5 left-3 md:left-7 md:top-0 font-bold font-sans text-white">Arrival</span>
                            <span class="absolute top-5 right-5 md:top-0 md:right-7  text-white"><FontAwesomeIcon :icon="faCalendar"/></span>
                        </label>
                        
                        <label class="relative block md:inline">
                            <input type="date" name="departure" id="departure" class="p-3 md:mx-4 rounded block md:inline w-full my-2 md:w-2/12 no-placeholder bg-slate-900/25 border rounded" v-model="selectedDate" @focus="showCalendar" @click="showCalendar">
                            <span class="absolute top-5 left-3 md:left-7 md:top-0 font-bold font-sans text-white">Departure</span>
                            <span class="absolute top-5 right-5 md:top-0 md:right-7 text-white"><FontAwesomeIcon :icon="faCalendar"/></span>
                        </label>
                        
                        <label class="relative block md:inline">
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
            <MapComponent />
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