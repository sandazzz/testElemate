<script setup lang="ts">
import type { CurrentWeather } from '@/models/apiResponseType'

defineProps<{ data: CurrentWeather | null }>()
</script>

<template>
  <div class="container">
    <div class="alert alert-info" v-if="data && data.location && data.current">
      <h3>Name: {{ data.location.name }}</h3>
      <p>Temperature: {{ data.current.temperature }}°C</p>
      <p>Description du temps: {{ data.current.weather_descriptions }}</p>
      <img :src="data.current.weather_icons[0]" alt="Weather icon" class="img-fluid" />
      <br />

      <router-link
        :to="{ name: 'detailed-page', params: { name: data.location.name } }"
        class="btn btn-link mt-3"
      >
        Plus de détail
      </router-link>
    </div>
    <div class="alert alert-warning" v-else>No data available</div>
  </div>
</template>
