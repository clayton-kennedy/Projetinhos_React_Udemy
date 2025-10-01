import "./Cronometro.css";
import Display from "./Display";
import Controles from "./Controle";
import { useState, useEffect } from "react";

function Cronometro() {
  const [milisecundos, setMilisegundos] = useState(0);
  const [timerLigado, setTimerLigado] = useState(false);

  const formatarTempo = () => {
    const minutos = ("0" + Math.floor((milisecundos / 60000) % 60)).slice(-2);
    const segundos = ("0" + Math.floor((milisecundos / 1000) % 60)).slice(-2);
    const centesimos = ("0" + Math.floor((milisecundos / 10) % 100)).slice(-2);

    return `${minutos}:${segundos}:${centesimos}`;
  };

  const zerar = () => {
    setMilisegundos(0);
  };

  useEffect(() => {
    let interval = null;
    if (timerLigado) {
      interval = setInterval(() => {
        setMilisegundos((antigo) => antigo + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerLigado]);

  return (
    <div className="tela">
      <Display time={formatarTempo()} />
      <Controles
        iniciar={() => setTimerLigado(true)}
        parar={() => setTimerLigado(false)}
        zerar={zerar}
      />
    </div>
  );
}

export default Cronometro;
