<script setup>
    import { ref } from 'vue';
    import FooterComponent from '@/components/home/FooterComponent.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    
    import { faBath } from '@fortawesome/free-solid-svg-icons/faBath'
    import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
    import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi';
   
    const selectedDate = ref('')
    const showCalendar = (event) => {
    event.target.showPicker()
    }

    const activeTab = ref('tab1'); // Default active tab

    const tabs = [
    { id: 'tab1', name: 'Luxury' },
    { id: 'tab2', name: 'Suite' },
    { id: 'tab3', name: 'Mini Suite' },
    { id: 'tab4', name: 'Classic Plus' },
    { id: 'tab5', name: 'Classic' },
    ];
</script>

<template>
    <div class="pt-40">
        <h2 class="text-center text-5xl font-sans tracking-widest text-cyan-950">ROOMS</h2>
    
      <!-- Buttons to switch between tabs -->
        <div class="buttons-container border-t border-b p-6 my-10 text-center">
           
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="{ 'active': activeTab === tab.id }" class="mx-5 px-3 my-2 text-lg font-mono text-cyan-950 hover:border-b-4 border-xl border-orange-600">{{ tab.name }}</button>
        </div>
        
        <div class="bg-slate-200 px-10 py-7 w-10/12 mx-auto">
            <div class="bookform mx-auto w-11/12">
                <form class="text-center">
                <label class="relative">
                    <input type="date" name="arrival" id="arrival" class="p-3 mx-4 rounded w-2/12 no-placeholder bg-white border rounded" v-model="selectedDate" @focus="showCalendar" @click="showCalendar">
                    <span class="absolute top-0 left-9 font-bold text-slate-600 font-mono">Arrival</span>
                    <span class="absolute top-0 right-7 text-white"><FontAwesomeIcon :icon="faCalendar"/></span>
                </label>
                
                <label class="relative">
                    <input type="date" name="departure" id="departure" class="p-3 mx-4 rounded w-2/12 no-placeholder bg-white border rounded" v-model="selectedDate" @focus="showCalendar" @click="showCalendar">
                    <span class="absolute top-0 left-9 font-bold font-mono text-slate-600">Departure</span>
                    <span class="absolute top-0 right-7 text-white"><FontAwesomeIcon :icon="faCalendar"/></span>
                </label>
                
                <label class="relative">
                    <select name="guests" id="guests" class="no-arrow p-3 mx-4 rounded w-2/12 bg-white text-slate-600 border font-mono rounded" >
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
      <!-- Content for each tab -->
        <div v-if="activeTab === 'tab1'">
            <div class="properties my-16">
                <div class="flex gap-5 w-10/12 mx-auto">
                    <div class="property w-8/12">
                        <img src="../assets/pearlygates/luxury.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property w-4/12">
                        <div class="detail p-2 mb-3">
                            <p  class="font-bold text-lg text-slate-800">Luxury</p>
                            <p class="leading-snug">Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and slippers. The air-conditioned double room features a flat-screen TV, a tea and coffee maker, a dining area, a wardrobe as well as pool views.</p>
                        </div>
                        <div class="amenities p-4 mb-3 bg-slate-100">
                            <p  class="font-bold text-lg text-slate-800">Amenities</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Bath</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faWifi"/> Wireless Internet</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faCoffee"/> Tea and Coffee Making</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Desk</p>
                            <p><FontAwesomeIcon :icon="faWifi"/> Linen and Towels</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="activeTab === 'tab2'">
            <div class="rooms my-20">
                <div class="flex gap-5 w-10/12 mx-auto">
                    <div class="property w-8/12">
                        <img src="../assets/pearlygates/suite.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property w-4/12">
                        <div class="detail p-2 mb-3">
                            <p  class="font-bold text-lg text-slate-800">Suite</p>
                            <p class="leading-snug">Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and slippers. The air-conditioned double room features a flat-screen TV, a tea and coffee maker, a dining area, a wardrobe as well as pool views.</p>
                        </div>
                        <div class="amenities p-4 mb-3 bg-slate-100">
                            <p  class="font-bold text-lg text-slate-800">Amenities</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Bath</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faWifi"/> Wireless Internet</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faCoffee"/> Tea and Coffee Making</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Desk</p>
                            <p><FontAwesomeIcon :icon="faWifi"/> Linen and Towels</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="activeTab === 'tab3'">
            <div class="attractions my-10">
                <div class="flex gap-5 w-10/12 mx-auto">
                    <div class="property w-8/12">
                        <img src="../assets/pearlygates/mini-suite.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property w-4/12">
                        <div class="detail p-2 mb-3">
                            <p  class="font-bold text-lg text-slate-800">Mini Suite</p>
                            <p class="leading-snug">Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and slippers. The air-conditioned double room features a flat-screen TV, a tea and coffee maker, a dining area, a wardrobe as well as pool views.</p>
                        </div>
                        <div class="amenities p-4 mb-3 bg-slate-100">
                            <p  class="font-bold text-lg text-slate-800">Amenities</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Bath</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faWifi"/> Wireless Internet</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faCoffee"/> Tea and Coffee Making</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Desk</p>
                            <p><FontAwesomeIcon :icon="faWifi"/> Linen and Towels</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="activeTab === 'tab4'">
            <div class="attractions my-10">
                <div class="flex gap-5 w-10/12 mx-auto">
                    <div class="property w-8/12">
                        <img src="../assets/pearlygates/classic-plus.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property w-4/12">
                        <div class="detail p-2 mb-3">
                            <p  class="font-bold text-lg text-slate-800">Classic Plus</p>
                            <p class="leading-snug">Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and slippers. The air-conditioned double room features a flat-screen TV, a tea and coffee maker, a dining area, a wardrobe as well as pool views.</p>
                        </div>
                        <div class="amenities p-4 mb-3 bg-slate-100">
                            <p  class="font-bold text-lg text-slate-800">Amenities</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Bath</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faWifi"/> Wireless Internet</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faCoffee"/> Tea and Coffee Making</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Desk</p>
                            <p><FontAwesomeIcon :icon="faWifi"/> Linen and Towels</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="activeTab === 'tab5'">
            <div class="attractions my-10">
                <div class="flex gap-5 w-10/12 mx-auto">
                    <div class="property w-8/12">
                        <img src="../assets/pearlygates/classic.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property w-4/12">
                        <div class="detail p-2 mb-3">
                            <p  class="font-bold text-lg text-slate-800">Classic</p>
                            <p class="leading-snug">Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and slippers. The air-conditioned double room features a flat-screen TV, a tea and coffee maker, a dining area, a wardrobe as well as pool views.</p>
                        </div>
                        <div class="amenities p-4 mb-3 bg-slate-100">
                            <p  class="font-bold text-lg text-slate-800">Amenities</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Bath</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faWifi"/> Wireless Internet</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faCoffee"/> Tea and Coffee Making</p>
                            <p class="mb-2"><FontAwesomeIcon :icon="faBath"/> Desk</p>
                            <p><FontAwesomeIcon :icon="faWifi"/> Linen and Towels</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
  </template>
  
  
  
<style scoped>
  /* Add styling for tabs and content as needed */
    .active{
        border-bottom: 4px orangered solid;
    }
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
  