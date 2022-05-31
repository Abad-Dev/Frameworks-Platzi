<script setup>
import Movies from '@/components/Movies.vue'
</script>

<template>
  <div>
    <Movies></Movies>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
