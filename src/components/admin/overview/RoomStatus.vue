<script setup>

</script>

<template>
    <main class="bg-slate-100 p-6 ml-8 my-4 rounded-xl">
        <h3 class="font-bold text-xl my-2">Room Status</h3>
        <div class="overview-content grid grid-cols-2 justify-evenly items-center gap-8">
           <div class="occupied">
                <div class="flex justify-between items-center mb-5">
                    <p>Occupied Rooms</p>
                    <p>104</p>
                </div>
                <div class="flex justify-between items-center">
                    <p>Inspected</p>
                    <p>40</p>
                </div>
            </div>
           <div class="available">
                <div class="flex justify-between items-center mb-5">
                    <p>Available Rooms</p>
                    <p>104</p>
                </div>
                <div class="flex justify-between items-center">
                    <p>Inspected</p>
                    <p>30</p>
                </div>
           </div>
        </div>
        
    </main>
</template>

<style scoped>

</style>