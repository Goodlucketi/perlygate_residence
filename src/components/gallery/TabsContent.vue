<script setup>
    import { ref } from 'vue';

    const activeTab = ref('tab1'); // Default active tab

    const tabs = [
    { id: 'tab1', name: 'Property and Surroundings' },
    { id: 'tab2', name: 'Rooms' },
    { id: 'tab3', name: 'Attractions' },
    { id: 'tab4', name: 'Meals' },
    ];
    
</script>

<template>
    <div class="gallery pt-40">
        <h2 class="text-center text-5xl font-sans tracking-widest text-cyan-950">GALLERY</h2>
    
      <!-- Buttons to switch between tabs -->
        <div class="buttons-container border-t border-b p-6 my-10 text-center">
           
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="{ 'active': activeTab === tab.id }" class="mx-3 block shadow-md p-3 md:inline md:mx-5 md:px-3 my-2 text-lg font-mono text-cyan-950 hover:border-b-4 border-xl border-orange-600">{{ tab.name }}</button>
        </div>
        
  
      <!-- Content for each tab -->
        <div v-if="activeTab === 'tab1'">
            <div class="properties my-16">
                <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 mx-auto">
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/about.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hero3.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hotel_48.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hotel_49.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/about-bg.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hotel_144.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hotel_142.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hero2.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="activeTab === 'tab2'">
            <div class="rooms my-20">
                <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 mx-auto">
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/classic.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/classic-plus.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/hotel_74.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/hotel_121.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/hotel_80.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/hotel_77.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/hotel_122.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/luxury.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="room mb-4">
                        <img src="../../assets/pearlygates/mini-twin.jpg" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="activeTab === 'tab3'">
            <div class="attractions my-10">
                <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 mx-auto">
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hero4.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hotel_144.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hotel_142.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/about-bg.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="activeTab === 'tab4'">
            <div class="meals my-10">
                <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 mx-auto">
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hero4.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hotel_144.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/hotel_142.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                    <div class="property mb-4">
                        <img src="../../assets/pearlygates/about-bg.webp" alt="" class="w-full rounded-lg h-52 object-cover">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  
  
  <style>
  /* Add styling for tabs and content as needed */
  .active{
    border-bottom: 4px orangered solid;
  }
  </style>
  