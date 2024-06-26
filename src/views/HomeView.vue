<script setup lang="ts">
import { getCurrentWeather } from '@/services/getData'
import type { CurrentWeather } from '@/models/apiResponseType'
import DataContainer from '@/components/DataContainer.vue'
import { ref } from 'vue'

const data = ref<CurrentWeather | null>(null)
const cityname = ref<string>('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  data.value = await getCurrentWeather(cityname.value) // Mettre à jour data avec la réponse
}
</script>

<template>
  <main class="container py-5">
    <h1 class="text-center mb-4">Find the temperature of a city</h1>

    <form @submit="handleSubmit" class="container mb-4">
      <div class="mb-3">
        <input class="form-control" type="text" placeholder="Type a city" v-model="cityname" />
      </div>
      <div class="text-center">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>

    <DataContainer :data="data" />
  </main>
</template>
