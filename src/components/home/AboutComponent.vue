<script setup>
  const props = defineProps({
    showButton:{
        type:Boolean,
        default:true,
    },
    
  })

</script>

<template>
    <main class="mt-10 relative p-2 md:p-10 h-auto">
        <h2 class="text-center text-3xl text-white font-bold my-5 md:my-12 ">About Us</h2>
        <div class="about-container mx-auto w-11/12 ">
            
            <div class="about-txt md:text-lg mb-10">
                <p>Perly Gate Residence offers accommodation in Uyo. The 5-star hotel features a patio and air-conditioned rooms with free WiFi and private bathrooms. The hotel includes an outdoor swimming pool with pool views, and guests can dine at the restaurant or drink at the bar.
                <br>
                The hotel's rooms include a desk and a flat-screen television. Perly Gate Residence rooms include bed linens and towels.
                <br>
                The hostel offers a vegetarian breakfast.
                <br>
                The receptionist at Perly Gate Residence can provide information about the region.
                The nearest airport is Akwa Ibom Airport, which is 32 kilometers from the hotel.
                </p>
            </div>
            <div class="text-center">
                 <router-link v-if="showButton" to="/" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
            </div>
           
        </div>
        <hr class="w-6/12 mx-auto h-1 bg-slate-400 my-10">
    </main>
</template>

<style scoped>
   main{
    background: linear-gradient(rgb(1, 3, 53, 0.8), rgba(2,5,67,0.6)), url('../../assets/pearlygates/about-bg.webp') no-repeat;
    background-size: cover;
    background-position:top;
    background-attachment: fixed;
    height: 80vh;
    color: #fff;
   }

   
   
   
</style>