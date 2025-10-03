import { PrevisaoContainer } from "./PrevisaoStyles";

function Previsao({ previsoes }) {
  const formatarHora = (dt_txt) => {
    const data = new Date(dt_txt);
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const hora = data.getHours().toString().padStart(2, "0");
    return `${dia}/${mes} - ${hora}h`;
  }

  return (
    <PrevisaoContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((prev) => (
          <li key={prev.dt}>
            <strong>{formatarHora(prev.dt_txt)}</strong>
            <img src={`https://openweathermap.org/img/wn/${prev.weather[0].icon}@2x.png`} alt="Imagem do clima" />
            <p>{prev.main.temp}ºC - {prev.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </PrevisaoContainer>
  )
}

export default Previsao