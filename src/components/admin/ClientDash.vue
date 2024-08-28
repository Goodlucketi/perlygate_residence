<script setup>
    import BookingList from './BookingList.vue';
    import OverView from './overview/OverView.vue';
    import RoomsOverview from './overview/RoomsOverview.vue';
    import RoomStatus from './overview/RoomStatus.vue';
    import OccupancyStats from './overview/OccupancyStats.vue';
    import CustomerFeedback from './overview/CustomerFeedback.vue';


    const props = defineProps({
        currentView: String,
    })
</script>

<template>
    <div class="client-Dash w-10/12">
        <div class="overview" v-if="currentView==='overview'">
            <h2 class="text-3xl font-bold font-mono text-cyan-950 text-center">Overview</h2>
            <main>
                <OverView />
                <RoomsOverview />
                <div class="grid grid-cols-2">
                    <RoomStatus />
                    <CustomerFeedback />
                    <OccupancyStats />
                </div>
                
            </main>
        </div>
        <div class="clients" v-else-if="currentView==='clients'">
            <h2 class="text-3xl font-bold font-mono text-cyan-950 text-center">Clients</h2>
            <div class="clients">
                <BookingList />
            </div>
        </div>
        <div class="rooms" v-else-if="currentView==='rooms'">
            <h2 class="text-3xl font-bold font-mono text-cyan-950 text-center">Rooms</h2>
        </div>
        <div class="reports" v-else-if="currentView==='reports'">
            <h2 class="text-3xl font-bold font-mono text-cyan-950 text-center">Reports</h2>
        </div>
        
    </div>
</template>

<style scoped>

</style>
