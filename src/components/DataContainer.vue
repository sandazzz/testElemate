<script setup lang="ts">
import type { CurrentWeather } from '@/models/type'

//Creation d'une props nommé data qui a pour type CurrentWeather ou null
defineProps<{ data: CurrentWeather | null }>()
</script>

<template>
  <div class="container py-5">
    <div
      class="card mb-4 border-0 shadow-sm"
      v-if="data && data.location && data.current"
      style="background-color: #e3f2fd"
    >
      <div class="card-body">
        <h3 class="card-title text-primary d-flex align-items-center mb-3">
          <i class="bi bi-geo-alt me-2"></i>{{ data.location.name }}
        </h3>
        <p class="card-text"><strong>Température:</strong> {{ data.current.temperature }}°C</p>
        <p class="card-text">
          <strong>Description du temps:</strong> {{ data.current.weather_descriptions.join(', ') }}
        </p>
        <img :src="data.current.weather_icons[0]" alt="Weather icon" class="img-fluid mb-3" />
        <div class="text-center mt-4">
          <router-link
            :to="{
              name: 'detailed-page',
              params: { name: data.location.name }
            }"
            class="btn btn-primary"
          >
            Plus de détails
          </router-link>
        </div>
      </div>
    </div>
    <div class="alert alert-warning" v-else>No data available</div>
  </div>
</template>
