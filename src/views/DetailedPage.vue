<script setup lang="ts">
import { useRoute } from 'vue-router'

//Get the name in the URL
const route = useRoute()
const cityname = route.params.name
</script>

<template>
  <main class="container py-5">
    <h1 class="text-center mb-4">{{ cityname }}'s weather</h1>
  </main>
</template>
