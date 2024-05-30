<script setup>
import { ref } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


const selectedDate = ref('')
const showCalendar = (event) => {
  event.target.showPicker()
}
</script>

<template>
  <header class="relative h-screen bg-slate-500">
    <swiper-container slides-per-view="1" speed="500" loop="true" pagination="true" autoplay-delay="4000" centered-slides="true" class="border w-full">
      <swiper-slide class="border w-screen">
        <img src="../../assets/pearlygates/hero1.webp" alt="Hero slider" class="w-full h-screen object-cover">
      </swiper-slide>

      <swiper-slide>
        <img src="../../assets/pearlygates/hero2.webp" alt="Hero slider" class="w-full h-screen object-cover">
      </swiper-slide>

      <swiper-slide>
        <img src="../../assets/pearlygates/hero3.webp" alt="Hero slider" class="w-full h-screen object-cover">
      </swiper-slide>

      <swiper-slide>
        <img src="../../assets/pearlygates/hero4.webp" alt="Hero slider" class="w-full h-screen object-cover">
      </swiper-slide>
    </swiper-container>

    <div class="overlay p-10 text-center absolute top-0 h-screen z-10 w-full text-white bg-cyan-950/50">
      <h1 class="text-white mt-40 md:mt-60 text-4xl md:text-6xl font-thin tracking-widest">WELCOME TO PERLYGATES RESIDENCE</h1>
      <p class="text-white text-2xl my-3 italic">Chill and Relax</p>
      
      
      <p class="text-white mt-50 text-2xl">
        <FontAwesomeIcon :icon="faStar" />
        <FontAwesomeIcon :icon="faStar" />
        <FontAwesomeIcon :icon="faStar" />
        <FontAwesomeIcon :icon="faStar" />
        <FontAwesomeIcon :icon="faStar" />
      </p>
    </div>

    <div class=" hidden md:block book z-20 absolute w-full bottom-0 bg-slate-950/75 p-12">
      <div class="bookform mx-auto w-11/12">
        <form class="text-center">
          <label class="relative">
            <input type="date" name="arrival" id="arrival" class="p-3 mx-4 rounded w-2/12 no-placeholder bg-slate-900/25 border rounded" v-model="selectedDate" @focus="showCalendar" @click="showCalendar">
            <span class="absolute top-0 left-9 font-bold font-sans text-white">Arrival</span>
            <span class="absolute top-0 right-7 text-white"><FontAwesomeIcon :icon="faCalendar"/></span>
          </label>
          
          <label class="relative">
            <input type="date" name="departure" id="departure" class="p-3 mx-4 rounded w-2/12 no-placeholder bg-slate-900/25 border rounded" v-model="selectedDate" @focus="showCalendar" @click="showCalendar">
            <span class="absolute top-0 left-9 font-bold font-sans text-white">Departure</span>
            <span class="absolute top-0 right-7 text-white"><FontAwesomeIcon :icon="faCalendar"/></span>
          </label>
          
          <label class="relative">
            <select name="guests" id="guests" class="no-arrow p-3 mx-4 rounded w-2/12 bg-slate-900/25 text-white border rounded" >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
              <option value="6">6 guests</option>
              <option value="7">7 guests</option>
              <option value="8">8 guests</option>
            </select>
            <span class="absolute top-0 right-6 text-white"><FontAwesomeIcon :icon="faUser"/></span>
          </label>
          
          <input type="submit" value="Book >" class="p-3 mx-4 rounded w-3/12 bg-orange-500 text-white">
        </form>
      </div>
    </div>
  </header>

</template>

<style scoped>
  swiper-container::part(pagination){
      position: absolute;
      bottom: 200px;
      z-index: 100;
  }

  swiper-container::part(bullet-active){
    background-color: rgb(250, 157, 35);
  }
/* Custom styles to hide the placeholder text */
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
