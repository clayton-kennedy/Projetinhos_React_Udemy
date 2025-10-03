import React from 'react'
import { ClimaInfo } from "./ClimaStyles";

function ClimaAtual({ clima }) {
  if (!clima) return <p>Digite uma cidade e clique em buscar.</p>
  return (
    <ClimaInfo>
      <h3>{clima.name}</h3>
      {clima.weather && clima.weather[0] && (
        <img src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} alt="Imagem do clima" />)}
      <p>{clima.main.temp}ºC</p>
      <p>{clima.weather[0].description}</p>
    </ClimaInfo>
  )
}

export default ClimaAtual