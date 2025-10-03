import './App.css'
import Busca from './component/Busca'
import ClimaAtual from './component/ClimaAtual'
import Previsao from './component/Previsao'
import { useState, useEffect } from "react";
import axios from 'axios';

import { Titulo, ClimaContainer } from "./AppStyles";

function App() {
  const [cidade, setCidade] = useState("")
  const [clima, setClima] = useState(null)
  const [dadosPrevisao, setDadosPrevisao] = useState([])
  const ApiKey = import.meta.env.VITE_API || "";

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocalização não suportada pelo navegador");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const resposta = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${ApiKey}&units=metric&lang=pt_br`
        );
        setCidade(resposta.data.name);
        setClima(resposta.data);
      },
      (error) => {
        console.error("Erro ao obter localização:", error);
        // fallback: buscar por uma cidade padrão
        setCidade("São Paulo");
      }
    );
  }, [ApiKey]);

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${ApiKey}&units=metric&lang=pt_br`
      )
      setClima(respostaClima.data)
      
      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${ApiKey}&units=metric&lang=pt_br`
      )
      setDadosPrevisao(respostaPrevisao.data.list.slice(0, 5));   

    } catch (error) {
      console.log("Erro ao buscar clima: ", error)
      setDadosPrevisao()
    }
  }

  return (
    <ClimaContainer>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <ClimaAtual clima={clima} />}
      {dadosPrevisao.length > 0 && <Previsao previsoes={dadosPrevisao} />}
    </ClimaContainer>
  )
}

export default App