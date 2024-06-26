import { ref } from 'vue'
import type { ApiResponse } from '@/models/apiResponse'
import.meta.env.VITE_API_WEATHER_KEY

//Avoir la température actuelle d'une ville
export function getCurrentWeather(name: string) {
  const data = ref<ApiResponse | null>(null)

  const apiKey = import.meta.env.VITE_API_WEATHER_KEY // Utilisation de import.meta.env

  fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${name}`)
    .then((response) => response.json()) // Convertir la réponse en JSON
    .then((json) => {
      data.value = json // Assigner les données JSON à data.value
      console.log(data)
    })
    .catch((error) => {
      console.error('Erreur lors du fetch:', error)
      data.value = null
    })
  // Gérer les erreurs éventuelles
  return data
}
