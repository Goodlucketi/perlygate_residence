<script setup>
    import { register } from 'swiper/element/bundle';
    import { onMounted } from 'vue';
// register Swiper custom elements
    register();

    const breakpoints = {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }

    onMounted(() => {
        const swiperContainer = document.querySelector('swiper-container');
        swiperContainer.breakpoints = breakpoints;
    });
</script>

<template>
    <main class="my-20 relative">
        <h2 class="text-center text-3xl text-cyan-950 font-bold my-12">Gallery</h2>
        <swiper-container slides-per-view="1" :breakpoints="breakpoints" space-between="10" speed="500" loop="true" pagination-clickable="true" autoplay-delay="3500" centered-slides="true" class="w-10/12 mx-auto">
            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/hotel_144.webp" alt="Hero slider" class="object-cover rounded-xl h-80">
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/luxury.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/hotel_80.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/Mini-suite.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/suite.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                </div>  
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/hotel_77.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                </div>  
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/hotel_122.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                </div>  
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/classic.webp" alt="Hero slider" class="object-cover rounded-xl h-80">
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/classic-plus.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="img-slide">
                    <img src="../../assets/pearlygates/hotel_142.webp" alt="Hero slider" class=" object-cover rounded-xl h-80">
                </div>
            </swiper-slide>
    </swiper-container>
    <hr class="w-8/12 mx-auto h-1 bg-slate-400 my-10">
    </main>
</template>

<style scoped>
  
   
</style>