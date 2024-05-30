<script setup>
  import AboutComponent from '@/components/home/AboutComponent.vue';
  import FooterComponent from '@/components/home/FooterComponent.vue';
</script>

<template>
  <main class="pt-12">
    <AboutComponent :show-button="false" />
    <FooterComponent />
  </main>
</template>
