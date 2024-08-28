<script setup>

</script>

<template>
    <main class="bg-slate-100 p-4 ml-8 my-4 rounded-xl w-6/12">
        <h3 class="font-bold text-xl my-2">Room Status</h3>
        <div class="overview-content grid grid-cols-2 justify-evenly items-center gap-10">
           <div class="occupied">
                <div class="flex justify-between items-center">
                    <p>Occupied Rooms</p>
                    <p>104</p>
                </div>
                <div class="flex justify-between items-center">
                    <p>Inspected</p>
                    <p>40</p>
                </div>
            </div>
           <div class="available">
                <div class="flex justify-between items-center">
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