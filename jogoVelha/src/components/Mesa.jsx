import React from 'react'
import Quadrado from './Quadrado'
import { useState } from 'react'
import { useEffect } from 'react'

function Mesa() {
    const [proximoJogador, setProximoJogador] = useState(true)
    const [quadrado, setQuadrado] = useState(Array(9).fill(null))
    const [AIpensando, setAIPensando] = useState(false)
    const vencedor = calcularVencedor(quadrado);

    const Click = (i) => {
        if (quadrado[i] || vencedor || AIpensando) {
            return;
        } else {
            const novosQuadrados = quadrado.slice();
            novosQuadrados[i] = proximoJogador ? "X" : "O";

            setQuadrado(novosQuadrados)
            setProximoJogador(!proximoJogador)
        }

    }
    const ResetarJogo = () => {
        setProximoJogador(true)
        setQuadrado(Array(9).fill(null))
        setAIPensando(false)
    }
    useEffect(() => {
        if (!proximoJogador && !vencedor) {
            setAIPensando(true)

            setTimeout(() => {
                IAmovimentacao(quadrado, setQuadrado, setProximoJogador)

                setAIPensando(false)
            }, 1000)
        }
    }, [proximoJogador, quadrado, vencedor])

    function calcularVencedor(quadrado) {
        const linhas = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < linhas.length; i++) {
            const [a, b, c] = linhas[i];
            if (quadrado[a] && quadrado[a] === quadrado[b] && quadrado[a] === quadrado[c]) {
                return quadrado[a];
            }
        }

        if (quadrado.every(casa => casa !== null)) {
            return "Empate";
        }

        return null;
    }

    function IAmovimentacao(quadrado, setQuadrado, setProximoJogador) {
        const livres = quadrado.map((val, idx) => val === null ? idx : null).filter(val => val !== null);

        if (livres.length > 0) {
            const movimento = livres[Math.floor(Math.random() * livres.length)];
            const novosQuadrados = quadrado.slice();
            novosQuadrados[movimento] = "O";

            setQuadrado(novosQuadrados);
            setProximoJogador(true);
        }
    }

    return (
        <div>
            <div className="status">
                {vencedor ? (
                    <p className='vencedor'>🏆 O vencedor é {vencedor}!</p>
                ) : (
                    <p>Próximo a jogar: {proximoJogador ? "X" : "O"}</p>
                )}
                {AIpensando && <p>🤖 IA pensando...</p>}
            </div>

            <div className="linha-mesa">
                <Quadrado value={quadrado[0]} onClick={() => Click(0)} />
                <Quadrado value={quadrado[1]} onClick={() => Click(1)} />
                <Quadrado value={quadrado[2]} onClick={() => Click(2)} />
            </div>
            <div className="linha-mesa">
                <Quadrado value={quadrado[3]} onClick={() => Click(3)} />
                <Quadrado value={quadrado[4]} onClick={() => Click(4)} />
                <Quadrado value={quadrado[5]} onClick={() => Click(5)} />
            </div>
            <div className="linha-mesa">
                <Quadrado value={quadrado[6]} onClick={() => Click(6)} />
                <Quadrado value={quadrado[7]} onClick={() => Click(7)} />
                <Quadrado value={quadrado[8]} onClick={() => Click(8)} />
            </div>
            <button className='btn-resetar' onClick={ResetarJogo}>Reiniciar jogo</button>
        </div>
    )
}

export default Mesa