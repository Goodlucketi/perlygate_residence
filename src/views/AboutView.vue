<script setup>
  import NavBar from '@/components/home/NavBar.vue';
  import AboutComponent from '@/components/home/AboutComponent.vue';
  import FooterComponent from '@/components/home/FooterComponent.vue';
</script>

<template>
  <main class="pt-12">
    <NavBar />
    <AboutComponent :show-button="false" />
    <FooterComponent />
  </main>
</template>
