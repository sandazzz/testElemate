import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CurrentWeather } from '@/models/apiResponseType'

export const useWeatherStore = defineStore('weather', () => {
  const dataweather = ref<CurrentWeather | null>(null)
  const saveWeather = (data: CurrentWeather) => {
    dataweather.value = data
  }
  return { dataweather, saveWeather }
})
