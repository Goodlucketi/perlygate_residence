<script setup>
    import { ref, watch } from 'vue';
    import FooterComponent from '@/components/home/FooterComponent.vue';
    import BookBtn from '@/components/home/BookBtn.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    
    import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
    import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

    const activeTab = ref('tab1'); // Default active tab

    const tabs = [
    { id: 'tab1', name: 'Luxury' },
    { id: 'tab2', name: 'Suite' },
    { id: 'tab3', name: 'Mini Suite' },
    { id: 'tab4', name: 'Classic Plus' },
    { id: 'tab5', name: 'Classic' },
    ];

    const arrivalDate = ref('')
    const displayArrivalDate = ref('')
    const arrivalInput = ref(null)


    const departureDate = ref('')
    const displayDepartureDate = ref('')
    const departureInput = ref(null)


    const openArrivalDatePicker = ()=>{
      arrivalInput.value.click()
    }

    const openDepartureDatePicker = ()=>{
      departureInput.value.click()
    }

    const updateArrivalDisplayValue = ()=>{
      displayArrivalDate.value = arrivalDate.value
    }

    const updateDepartureDisplayValue = ()=>{
      displayDepartureDate.value = departureDate.value
    }

    watch(arrivalDate, (newValue)=>{
      displayArrivalDate.value = newValue
    })

    watch(departureDate, (newValue)=>{
      displayDepartureDate.value = newValue
    })

    const  showCalendar = (e)=>{
      e.target.showPicker()
    }
</script>

<template>
    <div class="pt-40">
        <h2 class="text-center text-4xl md:text-5xl font-sans tracking-widest text-cyan-950">ROOMS</h2>
    
      <!-- Buttons to switch between tabs -->
        <div class="buttons-container shadow-md border-t border-b p-6 my-10 text-center">
           
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="{ 'active': activeTab === tab.id }" class="md:mx-5 p-3 my-2 text-lg font-mono text-cyan-950 border-xl border-orange-600 hover:shadow-md transition-all duration-800">{{ tab.name }}</button>
        </div>
        
   

        <!-- <div class="bg-slate-200 rounded-md py-4 md:px-10 md:py-7 w-10/12 mx-auto">
            <div class="bookform mx-auto w-11/12">
                <form method="https://app.thebookingbutton.com/properties/perlygateresidencedirect" class="text-center relative">
                <label class="relative block md:inline">
                    <input 
                        type="text" 
                        class="p-3 md:mx-4 md:inline rounded block w-full my-2 md:w-2/12 no-placeholder bg-transparent border rounded text-slate-950 border-slate-950"
                        placeholder="Arrival" 
                        v-model="displayArrivalDate" 
                        readonly  
                        @focus="openArrivalDatePicker"
                    >
                        
                        <input 
                        type="date" 
                        name="arrival" 
                        id="arrival" 
                        ref="arrivalInput" @input="updateArrivalDisplayValue" 
                        v-model="arrivalDate"
                        @click="showCalendar"
                        class="absolute top-0 left-0 w-full p-3 opacity-0"
                    >
                    <span class="absolute top-4 right-5 md:top-0 md:right-7 text-slate-600"><FontAwesomeIcon :icon="faCalendar"/></span>
                </label>
                
                <label class="relative block md:inline">
                    <input 
                        type="text" 
                        class="p-3 md:mx-4 md:inline rounded block w-full my-2 md:w-2/12 no-placeholder bg-transparent border rounded text-slate-950 border-slate-950"
                        placeholder="Departure" 
                        v-model="displayDepartureDate" 
                        readonly  
                        @focus="openDepartureDatePicker"
                    >
                        
                    <input 
                        type="date" 
                        name="departure" 
                        id="departure" 
                        ref="departureInput" @input="updateDepartureDisplayValue"
                        v-model="departureDate"
                        @click="showCalendar"
                        class="absolute top-0 left-0 w-full p-3 opacity-0"
                    >
                    <span class="absolute top-4 right-5 md:top-0 md:right-7 text-slate-600"><FontAwesomeIcon :icon="faCalendar"/></span>
                </label>
                
                <label class="relative block md:inline">
                    <select name="guests" id="guests" class="no-arrow p-3 mb-2 md:mx-4 rounded block md:inline w-full md:w-2/12 bg-transparent text-slate-950 border border-slate-950 font-mono rounded" >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6">6 guests</option>
                    <option value="7">7 guests</option>
                    <option value="8">8 guests</option>
                    </select>
                    <span class="absolute top-3 right-5 md:top-0 md:right-7 text-slate-600"><FontAwesomeIcon :icon="faUser"/></span>
                </label>
                
                <input type="submit" value="Book >" class="p-3 mt-4 md:mx-4 rounded block md:inline w-full md:w-3/12 bg-orange-500 text-white">
                </form>
            </div>
        </div> -->
      <!-- Content for each tab -->
        <div v-if="activeTab === 'tab1'">
            <div class="properties my-16">
                <div class="md:flex md:gap-5 w-11/12 mx-auto">
                    <div class="property md:w-8/12">
                        <img src="../assets/pearlygates/luxury.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property md:w-4/12">
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
                <div class="md:flex md:gap-5 w-11/12 mx-auto">
                    <div class="property md:w-8/12">
                        <img src="../assets/pearlygates/suite.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property md:w-4/12">
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
                <div class="md:flex md:gap-5 w-11/12 mx-auto">
                    <div class="property md:w-8/12">
                        <img src="../assets/pearlygates/Mini-suite.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property md:w-4/12">
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
                <div class="md:flex md:gap-5 w-11/12 mx-auto">
                    <div class="property md:w-8/12">
                        <img src="../assets/pearlygates/classic-plus.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property md:w-4/12">
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
                <div class="md:flex md:gap-5 w-11/12 mx-auto">
                    <div class="property md:w-8/12">
                        <img src="../assets/pearlygates/classic.webp" alt="" class="w-full rounded-lg h-92 object-cover">
                    </div>
                    <div class="property md:w-4/12">
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

   
    /* input::placeholder{
        color: #040116;
    }

    select:focus{
        background: rgb(236, 94, 28);
        outline: none;
    }

    .no-arrow{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    } */
</style>
  