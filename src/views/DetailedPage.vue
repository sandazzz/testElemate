<script setup lang="ts">
import { useWeatherStore } from '@/services/stores/weather'
import { useRouter } from 'vue-router'

const router = useRouter()
const weather = useWeatherStore()
const data = weather.dataweather

if (data == null) {
  router.push('/')
}
</script>

<template>
  <main class="container py-5">
    <h1 class="text-center mb-4" v-if="data">Météo de {{ data.location.name }}</h1>
    <h1 v-else></h1>

    <div v-if="data && data.location && data.current">
      <div class="card mb-4 border-0 shadow-sm" style="background-color: #e3f2fd">
        <div class="card-body">
          <h5 class="card-title d-flex align-items-center text-primary">Localisation</h5>
          <p class="card-text">
            <strong>Pays:</strong> {{ data.location.country }}<br />
            <strong>Région:</strong> {{ data.location.region }}<br />
            <strong>Décalage horaire UTC:</strong> {{ data.location.utc_offset }}
          </p>
        </div>
      </div>

      <div class="card mb-4 border-0 shadow-sm" style="background-color: #bbdefb">
        <div class="card-body">
          <h5 class="card-title d-flex align-items-center text-primary">Température Actuelle</h5>
          <div class="d-flex align-items-center mb-3">
            <img
              :src="data.current.weather_icons[0]"
              alt="Weather icon"
              class="img-fluid me-3"
              style="width: 50px"
            />
            <div>
              <p class="mb-0">
                <strong>Description:</strong> {{ data.current.weather_descriptions.join(', ') }}
              </p>
              <p class="mb-0"><strong>Température:</strong> {{ data.current.temperature }}°C</p>
            </div>
          </div>
          <p class="card-text">
            <strong>Heure d'observation:</strong> {{ data.current.observation_time }}<br />
            <strong>Ressenti:</strong> {{ data.current.feelslike }}°C<br />
            <strong>Indice UV:</strong> {{ data.current.uv_index }}<br />
            <strong>Visibilité:</strong> {{ data.current.visibility }} km
          </p>
        </div>
      </div>

      <div class="card mb-4 border-0 shadow-sm" style="background-color: #e3f2fd">
        <div class="card-body">
          <h5 class="card-title d-flex align-items-center text-primary">Vent et Pression</h5>
          <p class="card-text">
            <strong>Vitesse du vent:</strong> {{ data.current.wind_speed }} km/h<br />
            <strong>Direction du vent:</strong> {{ data.current.wind_dir }}<br />
            <strong>Pression:</strong> {{ data.current.pressure }} hPa
          </p>
        </div>
      </div>

      <div class="card mb-4 border-0 shadow-sm" style="background-color: #bbdefb">
        <div class="card-body">
          <h5 class="card-title d-flex align-items-center text-primary">
            Humidité et Précipitation
          </h5>
          <p class="card-text">
            <strong>Humidité:</strong> {{ data.current.humidity }}%<br />
            <strong>Précipitations:</strong> {{ data.current.precip }} mm<br />
            <strong>Couverture nuageuse:</strong> {{ data.current.cloudcover }}%
          </p>
        </div>
      </div>
    </div>

    <div class="alert alert-warning" v-else>No data available</div>
  </main>
</template>
