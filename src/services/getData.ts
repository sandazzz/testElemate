import type { CurrentWeather } from '@/models/type'

// Fonction pour obtenir les données météorologiques actuelles pour une ville donnée
export function getCurrentWeather(name: string): Promise<CurrentWeather | null> {
  // Récupération de la clé API à partir des variables d'environnement
  const apiKey = import.meta.env.VITE_API_WEATHER_KEY

  // Effectue une requête fetch vers l'API weatherstack avec le nom de la ville et la clé API
  //!!! Le plan gratuit permet que des requettes http, les requettes https sont payantes
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
