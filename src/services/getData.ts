import type { ApiResponse } from '@/models/apiResponse'

export function getCurrentWeather(name: string): Promise<ApiResponse | null> {
  const apiKey = import.meta.env.VITE_API_WEATHER_KEY

  return fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${name}`)
    .then((response) => response.json())
    .then((json) => {
      return json as ApiResponse
    })
    .catch((error) => {
      console.error('Erreur lors du fetch:', error)
      return null
    })
}
