<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { RouterLink, RouterView } from 'vue-router'

const navActive = ref(false)

const  toggleNavBar = ()=> {
    // this.navActive = !this.navActive
    console.log('clicked');
  }

</script>

<template>
  <header class="bg-cyan-950 p-4 font-mono fixed top-0 left-0 z-20 w-full md:p-2">
    <nav class="w-10/12 mx-auto flex justify-between items-center gap-">
      <div class="nav-logo w-2/12 md:w-4/12">
        <router-link to="/"><img src="./assets/pearlygates/logo-removebg-preview.png" alt="logo" class=""></router-link>
      </div>
      <div class="links">
        <div class="contact flex items-center justify-start md:justify-end gap-5">
          <p class="text-white p-2"><a href="tel:+23470876680366" class="hover:underline"><FontAwesomeIcon :icon="faPhone" class="bg-slate-800 p-3 rounded-full md:border-0 md:p-0 md:bg-transparent"/> <span class="hidden md:inline">+23470876680366</span> </a></p>
          <a href="https://app.thebookingbutton.com/properties/perlygateresidencedirect"><button class="rounded-full bg-orange-600 p-2 text-white md:p-4">BOOK NOW</button></a>
        </div>
        <div class="nav-links md:flex md:items-center text-white md:gap-8 mt-5 hidden md:block">
          <router-link to="/">HOME</router-link>
          <router-link to="/rooms">ROOMS</router-link>
          <router-link to="/gallery">GALLERY</router-link>
          <router-link to="/about-us">ABOUT US</router-link>
          <router-link to="/contact">CONTACT US</router-link>
        </div>
        
      </div>
      <div class="menu-bar md:hidden"  @click="toggleNavBar">
          <FontAwesomeIcon class="text-white text-2xl":icon="faBars" />
      </div>
    </nav>
  </header>
  

  <RouterView />
</template>

<style scoped>

</style>
