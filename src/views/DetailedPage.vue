<script setup lang="ts">
import type { CurrentWeather } from '@/models/apiResponseType'
import { useRoute } from 'vue-router'

const route = useRoute()
const data: CurrentWeather | null = route.query.data
  ? (JSON.parse(route.query.data as string) as CurrentWeather)
  : null
</script>

<template>
  <main class="container py-5">
    <h1 class="text-center mb-4" v-if="data">{{ data.location.name }}'s weather</h1>
    <h1 v-else></h1>
    <div class="alert alert-info" v-if="data && data.location && data.current">
      <h3>Name: {{ data.location.name }}</h3>
      <p>Country: {{ data.location.country }}</p>
      <p>Region: {{ data.location.region }}</p>

      <p>Temperature: {{ data.current.temperature }}°C</p>
      <p>Description du temps: {{ data.current.weather_descriptions }}</p>
      <img :src="data.current.weather_icons[0]" alt="Weather icon" class="img-fluid" />
      <br />
    </div>
    <div class="alert alert-warning" v-else>No data available</div>
  </main>
</template>
