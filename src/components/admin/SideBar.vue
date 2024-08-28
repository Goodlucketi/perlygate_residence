<script setup>
    defineProps(['updateView'])
</script>
<template>
    <div class="sidebar bg-slate-100 w-2/12 pt-10 p-5">
        <div class="logo text-center relative">
                <img src="@/assets/pearlygates/logo-removebg-preview.png" alt="Perlygates-Logo" class="w-5/12 mx-auto absolute -top-20 left-10">
            </div>
        <div class="side-menu my-8">
            <li class="my-9 bg-slate-200 p-3 rounded-md list-none pl-8 hover:bg-cyan-800 hover:text-white transition-all duration-500" @click="$emit('updateView','overview')">Dashboard</li>
            <li class="my-9 bg-slate-200 p-3 rounded-md list-none pl-8 hover:bg-cyan-800 hover:text-white transition-all duration-500" @click="$emit('updateView','clients')">Clients</li>
            <li class="my-9 bg-slate-200 p-3 rounded-md list-none pl-8 hover:bg-cyan-800 hover:text-white transition-all duration-500" @click="$emit('updateView','rooms')">Rooms</li>
            <li class="my-9 bg-slate-200 p-3 rounded-md list-none pl-8 hover:bg-cyan-800 hover:text-white transition-all duration-500" @click="$emit('updateView','reports')">Reports</li>
        </div>
    </div>
</template>


<style  scoped>

</style>
