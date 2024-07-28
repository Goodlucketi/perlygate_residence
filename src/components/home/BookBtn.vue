<script setup>
   
</script>

<template>
    <div>
        <div class="book-btn bg-orange-600 text-white p-2 rounded-xl">
            <router-link to="/booking">Book Now</router-link>
        </div>
    </div>
</template>



<style scoped>
    .book-btn{
        animation: amplify linear infinite 2s;
    }

    @keyframes amplify {
        0%{
            transform: scale(.8);
        }

        50%{
            transform: scale(1);
        }

        100%{
            transform: scale(.8);
        }
    }
</style>
