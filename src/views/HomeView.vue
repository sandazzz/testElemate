<script setup lang="ts">
import { getCurrentWeather } from '@/services/getData'
import type { ApiResponse } from '@/models/apiResponse'
import { ref } from 'vue'

const data = ref<ApiResponse | null>(null)
const cityname = ref<string>('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  data.value = await getCurrentWeather(cityname.value) // Mettre à jour data avec la réponse
}
</script>

<template>
  <form @submit="handleSubmit">
    <input type="text" placeholder="City" v-model="cityname" />
    <button type="submit">Submit</button>
  </form>
  <main>
    <h1>Find the temperature of a city</h1>

    <p v-if="data && data.location && data.current">
      Name: {{ data.location.name }}<br />
      Temperature: {{ data.current.temperature }}°C <br />
      Description du temps :
      {{ data.current.weather_descriptions }}
      <img :src="data.current.weather_icons[0]" alt="Weather icon" />
      <br />
      <a href="">Détail</a>
    </p>
    <p v-else>No data available</p>
  </main>
</template>
