<script setup lang="ts">
import { ref } from 'vue'
import { getCurrentWeather } from '@/services/getData'
import { useWeatherStore } from '@/services/stores/weather'
import DataContainer from '@/components/DataContainer.vue'

// Utilisation du store de météo
const weather = useWeatherStore()

// Utilisation de ref pour le champ de saisie du nom de la ville
const cityname = ref<string>('')

// Fonction pour gérer la soumission du formulaire
const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const data = await getCurrentWeather(cityname.value)
  if (data) {
    weather.saveWeather(data)
  }
}
</script>

<template>
  <main class="container. py-5">
    <h1 class="text-center mb-4">Trouver la température d'une ville</h1>

    <!-- Formulaire pour saisir le nom de la ville -->
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
        <!-- Bouton de soumission du formulaire -->
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>

    <!-- Composant pour afficher les données météorologiques -->
    <DataContainer :data="weather.dataweather" />
  </main>
</template>
