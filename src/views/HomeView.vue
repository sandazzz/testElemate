<script setup lang="ts">
import { getCurrentWeather } from '@/services/getData'

const data = getCurrentWeather('New York')
</script>

<template>
  <main>
    <h1>Find the temperature of a city</h1>
    <p>{{ data?.location.name }}</p>
    <br />
    <p>{{ data?.current.temperature }}</p>
    <br />
    <p>{{ data?.current.weather_descriptions }}</p>
  </main>
</template>
