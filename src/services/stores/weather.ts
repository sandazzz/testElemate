import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CurrentWeather } from '@/models/type'

// Définition d'un store Pinia nommé 'weather' pour gérer les données météorologiques dans l'application
export const useWeatherStore = defineStore('weather', () => {
  // State de la méteo
  const dataweather = ref<CurrentWeather | null>(null)

  //Setter pour mettre à jour la météo
  const saveWeather = (data: CurrentWeather) => {
    dataweather.value = data
  }
  return { dataweather, saveWeather }
})
