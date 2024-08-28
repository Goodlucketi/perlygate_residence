<script setup>
    import { ref } from 'vue'
    import DashboardNav from './DashboardNav.vue';
    import SideBar from './SideBar.vue';
    import ClientDash from './ClientDash.vue'

    const currentView = ref('overview')
</script>


<template >
    <div class="dashboard">
        <DashboardNav />
       
        <div class="nav-content pr-10 flex justify-between">
            <SideBar @updateView = "currentView = $event" />
            <ClientDash :currentView="currentView" />

        </div>
        
    </div>
</template>

<style scoped>
    
</style>