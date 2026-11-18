<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <main class="panel"><router-view /></main>
  </div>
</template>
