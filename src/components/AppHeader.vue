<script setup>
import logo from '../assets/logo.svg'
</script>

<template>
  <header class="header">
    <router-link to="/" class="brand">
      <img :src="logo" alt="" width="40" height="40" />
      <span>KidsConnect</span>
    </router-link>
  </header>
</template>
