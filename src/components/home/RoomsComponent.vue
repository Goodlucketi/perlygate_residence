<script setup>
    import { register } from 'swiper/element/bundle';
// register Swiper custom elements
    register();

    const pricing = {
        classic: 30000,
        classicPlus: 35000,
        miniSuite: 55000,
        perlySuite: 55000,
        marvelSuite: 70000,
        luxurySingle: 40000,
        blissHeaven: 60000,
        luxuryTwin: 45000,
        suite: 65000,
    }

</script>

<template>
    <main class="mt-10 md:my-20 relative">
        <h2 class="text-center text-3xl text-cyan-950 font-bold my-12">Our Rooms</h2>
        <swiper-container slides-per-view="auto" space-between="50" speed="500" loop="true" navigation="true" autoplay-delay="3500" centered-slides="true" class="w-11/12 mx-auto">
            <swiper-slide class=" md:flex md:justify-center md:items-center gap-10 md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/about2.webp" alt="Hero slider" class="object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.classic }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3"> Classic</p>
                    <p class="mb-10">
                        Featuring free toiletries, this room includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>

            <swiper-slide class=" md:flex md:justify-center md:items-center gap-10 md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/classic-plus.webp" alt="Hero slider" class="object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.classicPlus }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3"> Classic Plus</p>
                    <p class="mb-10">
                        Featuring free toiletries, this room includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>

            <swiper-slide class="md:flex md:justify-center md:items-center md:gap-10 md:flex-row-reverse md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/hotel_77.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.luxurySingle }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3"> Luxury (Single Bed)</p>
                    <p class="mb-10">
                        Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and slippers. The air-conditioned double room features a flat-screen TV, a tea and coffee maker, a dining area, a wardrobe as well as pool views.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>

            <swiper-slide class="md:flex md:justify-center md:items-center md:gap-10 md:flex-row-reverse md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/Mini-suite.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.luxuryTwin }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3"> Luxury (Twin Bed)</p>
                    <p class="mb-10">
                        Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and slippers. The air-conditioned double room features a flat-screen TV, a tea and coffee maker, a dining area, a wardrobe as well as pool views.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>

            <swiper-slide class="md:flex md:justify-center md:items-center md:gap-10 md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/mini-twin.jpg" alt="Hero slider" class=" object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.miniSuite }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3">Mini Suite</p>
                    <p class="mb-10">
                        Featuring free toiletries, this mini suite includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>

            <swiper-slide class="md:flex md:justify-center md:items-center md:gap-10 md:flex-row-reverse md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/suite.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.suite }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3">Suite</p>
                    <p class="mb-10">
                        The air-conditioned suite has 1 bedroom and 1 bathroom with a shower and slippers. The suite features a tea and coffee maker, a dining area, a wardrobe, a flat-screen TV, as well as pool views.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>

            <swiper-slide class="md:flex md:justify-center md:items-center md:gap-10 md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/classic.webp" alt="Hero slider" class="object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.perlySuite }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3">Pery Suite</p>
                    <p class="mb-10">
                        Featuring free toiletries, this room includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>

            <swiper-slide class="md:flex md:justify-center md:items-center md:gap-10 md:flex-row-reverse md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/hotel_121.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.blissHeaven }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3">Blissful Heaven</p>
                    <p class="mb-10">
                        Featuring free toiletries, this room includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>

            <swiper-slide class="md:flex md:justify-center md:items-center md:gap-10 md:flex-row-reverse md:w-10/12">
                <div class="img-slide mb-5 md:w-6/12 relative">
                    <img src="../../assets/pearlygates/hotel_74.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                    <span class="pricing absolute p-2 text-white bg-orange-700 text-xl rounded top-5 right-5">N {{ pricing.marvelSuite }}</span>
                </div>
                <div class="text-slide my-5 md:w-6/12">
                    <p class="font-bold text-2xl text-cyan-950 mb-3">Marvelous Suite</p>
                    <p class="mb-10">
                        Featuring free toiletries, this room includes a private bathroom. The air-conditioned room features a flat-screen TV, a tea, and coffee maker, and a wardrobe.
                    </p>
                    <router-link to="/room_detail" class="rounded-full bg-orange-600 p-4 text-white">LEARN MORE ></router-link>
                </div>
                
            </swiper-slide>
    </swiper-container>
    <hr class="w-8/12 mx-auto h-1 bg-slate-400 my-3">
    </main>
</template>

<style scoped>
   

   swiper-container::part(button-next), swiper-container::part(button-prev) {
        color: rgb(3, 20, 56);
        padding: 5px;
        margin-left: 10px;
        margin-right: 10px;
        top: 200px;
    }
    swiper-container::part(button-next) {
        right: -10px;
    }
    swiper-container::part(button-prev) {
        left: -10px;
    }
   
   
</style>