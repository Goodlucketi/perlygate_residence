<script setup>
    import { onMounted } from 'vue';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    onMounted(() => {
        AOS.refresh(); // Ensure AOS initializes correctly
    });
</script>

<template>
    <section class="rooms mt-30 pt-36">
        <div class="rooms-container w-11/12 mt-12 p-4 mx-auto">
            <h2 class="text-center text-5xl font-sans tracking-widest text-cyan-950">ROOMS</h2>
            <hr class="my-20 ">
            <div class="rooms-views my-16">
                <div class="room flex justify-center gap-5 items-center my-5">
                    <div class="room-img w-5/12 p-2" data-aos="fade-right" data-aos-duration="2000">
                        <img src="../../assets/pearlygates/luxury.webp" alt="Luxury" class="rounded-xl h-80 object-cover">
                    </div>
                    <div class="room-txt w-5/12 p-2" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300">
                        <p class="p-2 font-bold text-2xl text-cyan-950">Luxury</p>
                        <p class="p-2 mb-10">Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and slippers. The air-conditioned double room features a flat-screen TV, a tea and coffee maker, a dining area, a wardrobe as well as pool views.</p>
                        <router-link to="/" class="rounded-full bg-orange-600 p-4 text-white ">LEARN MORE ></router-link>

                    </div>
                </div>

                <hr class="my-10">

                <div class="room flex justify-center gap-5 flex-row-reverse items-center my-5">
                    <div class="room-img w-5/12 p-2" data-aos="fade-left" data-aos-duration="2000">
                        <img src="../../assets/pearlygates/suite.webp" alt="Luxury" class="rounded-xl h-80 object-cover" >
                    </div>
                    <div class="room-txt w-5/12 p-2" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
                        <p class="p-2 font-bold text-2xl text-cyan-950">Suite</p>
                        <p class="p-2 mb-10">The air-conditioned suite has 1 bedroom and 1 bathroom with a shower and slippers. The suite features a tea and coffee maker, a dining area, a wardrobe, a flat-screen TV, as well as pool views.</p>
                        <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white ">LEARN MORE ></router-link>

                    </div>
                </div>

                <hr class="my-10">

                <div class="room flex justify-center gap-5 items-center my-5">
                    <div class="room-img w-5/12 p-2" data-aos="fade-right" data-aos-duration="2000">
                        <img src="../../assets/pearlygates/Mini-suite.webp" alt="Luxury" class="rounded-xl h-80 object-cover">
                    </div>
                    <div class="room-txt w-5/12 p-2" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300">
                        <p class="p-2 font-bold text-2xl text-cyan-950">Mini Suite</p>
                        <p class="p-2 mb-10">Featuring free toiletries, this mini suite includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.</p>
                        <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white ">LEARN MORE ></router-link>
                    </div>
                </div>

                <hr class="my-10">

                <div class="room flex justify-center gap-5 flex-row-reverse items-center my-5">
                    <div class="room-img w-5/12 p-2" data-aos="fade-left" data-aos-duration="2000">
                        <img src="../../assets/pearlygates/classic-plus.webp" alt="Luxury" class="rounded-xl h-80 object-cover">
                    </div>
                    <div class="room-txt w-5/12 p-2" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
                        <p class="p-2 font-bold text-2xl text-cyan-950">Classic Plus</p>
                        <p class="p-2 mb-10">Featuring free toiletries, this room includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.</p>
                        <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white ">LEARN MORE ></router-link>

                    </div>
                </div>

                <hr class="my-10">

                <div class="room flex justify-center gap-5 items-center my-5">
                    <div class="room-img w-5/12 p-2" data-aos="fade-right" data-aos-duration="2000">
                        <img src="../../assets/pearlygates/classic.webp" alt="Luxury" class="rounded-xl h-80 object-cover">
                    </div>
                    <div class="room-txt w-5/12 p-2" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300">
                        <p class="p-2 font-bold text-2xl text-cyan-950">Classic</p>
                        <p class="p-2 mb-10">Featuring free toiletries, this room includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.</p>
                        <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white ">LEARN MORE ></router-link>
                    </div>
                </div>
            </div>
            <hr class="my-10">

        </div>
    </section>
</template>

<style scoped>
    .rooms{
        background:linear-gradient(rgba(206, 206, 205, 0.849), rgba(205, 204, 203, 0.9)), url('../../assets/pearlygates/hotel_121.webp') no-repeat;
        background-size: cover;
        
    }
</style>