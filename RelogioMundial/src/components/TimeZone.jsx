import React, { useEffect, useState } from 'react';

function TimeZone({ timeZone }) {
    const [tempo, setTempo] = useState("");

    useEffect(() => {
        const atualizarHora = () => {
            const data = new Date();
            const opcoes = {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };
            const horario = data.toLocaleTimeString("pt-BR", opcoes);
            setTempo(horario);
        };

        atualizarHora();
        const interval = setInterval(atualizarHora, 1000);
        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <div>
            <h2>{timeZone.replace("_", " ")}</h2>
            <h3>{tempo}</h3>
        </div>
    );
}

export default TimeZone;