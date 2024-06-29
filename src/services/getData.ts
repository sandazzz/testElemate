import type { CurrentWeather } from '@/models/type'

export function getCurrentWeather(name: string): Promise<CurrentWeather | null> {
  const apiKey = import.meta.env.VITE_API_WEATHER_KEY
  const data = fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      return json as CurrentWeather
    })
    .catch((error) => {
      console.error('Erreur lors du fetch:', error)
      return null
    })
  return data
}
