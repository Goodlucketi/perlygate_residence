<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="bg-cyan-950 p-2 font-mono fixed top-0 left-0 z-20 w-full">
    <nav class="w-10/12 mx-auto flex justify-between items-center">
      <div class="nav-logo">
        <img src="./assets/pearlygates/logo-removebg-preview.png" alt="logo" class="">
      </div>
      <div class="links">
        <div class="contact flex items-center justify-end gap-5">
          <p class="text-white p-2"><a href="tel:+23470876680366" class="hover:underline"><FontAwesomeIcon :icon="faPhone"/> +23470876680366</a></p>
          <button class="rounded-full bg-orange-600 p-4 text-white">BOOK NOW</button>
        </div>
        <div class="nav-links flex items-center text-white gap-8 mt-5 ">
          <router-link to="/">HOME</router-link>
          <router-link to="/rooms">ROOMS</router-link>
          <router-link to="/gallery">GALLERY</router-link>
          <router-link to="/about-us">ABOUT US</router-link>
          <router-link to="/contact">CONTACT US</router-link>
        </div>
      </div>
    </nav>
  </header>
  

  <RouterView />
</template>

<style scoped>

</style>
