<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
    import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <main class="map">
        <div class="map-location p-1 w-11/12 mx-auto my-5 md:flex md:justify-center md:items-start md:gap-10 md:my-20">
            <div class="map mb-5 md:w-6/12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.287174946338!2d7.906446908147893!3d5.057126238448417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d577ad2c61da3%3A0x35de29cdcd1a2bb1!2sPerly%20Gate%20Residence!5e0!3m2!1sen!2sng!4v1716981503218!5m2!1sen!2sng" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full md:h-72"></iframe>
            </div>
            <div class="location">
                <div class="address mb-10">
                    <p class="p-1 font-bold text-xl">PERLY GATE RESIDENCE</p> 
                    <p class="p-1"><font-awesome-icon :icon="faMapMarker"/> 120 Calabar Itu Highway, Uyo, Akwa Ibom State, 520101, Nigeria</p>    
                    <p class="p-1"><font-awesome-icon :icon="faPhone"/> +2347086680366</p>
                    <p class="p-1"><font-awesome-icon :icon="faEnvelope"/> reservations@perlygateresidence.com</p>
                </div>
                <router-link to="/contact" class="rounded-full bg-orange-600 p-4 text-white ">LEARN MORE ></router-link>

            </div>

        </div>
    </main>
</template>

<style scoped>

</style>