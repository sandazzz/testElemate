<script setup lang="ts">
import { ref } from 'vue'
import { getCurrentWeather } from '@/services/getData'
import { useWeatherStore } from '@/services/stores/weather'
import DataContainer from '@/components/DataContainer.vue'

const weather = useWeatherStore()

const cityname = ref<string>('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const data = await getCurrentWeather(cityname.value) // Mettre à jour data avec la réponse
  if (data) {
    weather.saveWeather(data)
  }
}
</script>

<template>
  <main class="container. py-5">
    <h1 class="text-center mb-4">Trouver la température d'une ville</h1>

    <form @submit="handleSubmit" class="container mb-4">
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Ecrivez le nom d'une ville"
          v-model="cityname"
        />
      </div>
      <div class="text-center">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>

    <DataContainer :data="weather.dataweather" />
  </main>
</template>
