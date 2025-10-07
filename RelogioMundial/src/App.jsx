import './App.css';
import TimeZone from './components/TimeZone';
import { useState } from "react";

function App() {
  const fusosHorarios = [
    // América
    "America/Sao_Paulo",
    "America/Rio_Branco",
    "America/Manaus",
    "America/Belem",
    "America/Fortaleza",
    "America/Recife",
    "America/Araguaina",
    "America/Bahia",
    "America/Montevideo",
    "America/Argentina/Buenos_Aires",
    "America/Bogota",
    "America/Lima",
    "America/Caracas",
    "America/Panama",
    "America/Santiago",
    "America/La_Paz",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Halifax",
    "America/Toronto",
    "America/Vancouver",
    "America/Mexico_City",

    // Europa
    "Europe/London",
    "Europe/Lisbon",
    "Europe/Madrid",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Rome",
    "Europe/Amsterdam",
    "Europe/Brussels",
    "Europe/Zurich",
    "Europe/Athens",
    "Europe/Istanbul",
    "Europe/Moscow",
    "Europe/Oslo",
    "Europe/Stockholm",
    "Europe/Warsaw",
    "Europe/Helsinki",

    // Ásia
    "Asia/Tokyo",
    "Asia/Shanghai",
    "Asia/Seoul",
    "Asia/Singapore",
    "Asia/Hong_Kong",
    "Asia/Bangkok",
    "Asia/Jakarta",
    "Asia/Dubai",
    "Asia/Kolkata",
    "Asia/Karachi",
    "Asia/Taipei",
    "Asia/Kuala_Lumpur",
    "Asia/Manila",
    "Asia/Riyadh",
    "Asia/Tehran",
    "Asia/Baghdad",
    "Asia/Jerusalem",

    // Oceania
    "Australia/Sydney",
    "Australia/Melbourne",
    "Australia/Brisbane",
    "Australia/Perth",
    "Pacific/Auckland",
    "Pacific/Fiji",
    "Pacific/Honolulu",
    "Pacific/Tahiti",

    // África
    "Africa/Cairo",
    "Africa/Johannesburg",
    "Africa/Nairobi",
    "Africa/Lagos",
    "Africa/Accra",
    "Africa/Casablanca",

    // Gerais
    "UTC",
    "GMT"
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusosHorariosSelecionados, setFusosHorariosSelecionados] = useState([fusoHorarioLocal]);

  const adicionarFuso = (e) => {
    const novoFuso = e.target.value;
    if (novoFuso && !fusosHorariosSelecionados.includes(novoFuso)) {
      setFusosHorariosSelecionados([...fusosHorariosSelecionados, novoFuso]);
    }
  };

  return (
    <div>
      <h1>Relógio Mundial</h1>

      <select onChange={adicionarFuso}>
        <option value="" disabled selected>Selecione um fuso horário</option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>{fuso.replace("_", " ")}</option>
        ))}
      </select>

      <div>
        {fusosHorariosSelecionados.map((fus) => (
          <TimeZone key={fus} timeZone={fus} />
        ))}
      </div>
    </div>
  );
}

export default App;
