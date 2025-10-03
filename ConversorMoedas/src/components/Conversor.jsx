import React from 'react'
import "./Conversor.css";
import { useState, useEffect } from "react";
import axios from 'axios';

function Conversor() {
    const [taxa, setTaxa] = useState(null)
    const [moedaAtual, setMoedaAtual] = useState("BRL")
    const [moedaEsperada, setMoedaEsperada] = useState("USD")
    const [valorAtual, setValorAtual] = useState(null)
    const [valorConvertido, setValorConvertido] = useState(null)
    const [taxaConversaoAtual, setTaxaConversaoAtual] = useState(null)

    //buscar dados da api
    useEffect(() => {
        axios.get("https://v6.exchangerate-api.com/v6/348f1a00d0d92278c12411af/latest/USD")
            .then((resposta) => {
                setTaxa(resposta.data.conversion_rates);
            })
            .catch((erro) => {
                console.log("Erro ao buscar dados da api: ", erro);
            })

    }, []) //busca uma vez quando carrega a página

    useEffect(() => {
        if (taxa) {
            const taxaAtual = taxa[moedaAtual] || 0
            const taxaEsperada = taxa[moedaEsperada] || 0
            const resultado = ((valorAtual / taxaAtual) * taxaEsperada).toFixed(2);
            setValorConvertido(resultado);
            setTaxaConversaoAtual(taxaEsperada)
        }
    }, [valorAtual, taxa, moedaAtual, moedaEsperada])

    if (!taxa) {
        return <h1>Carregando...</h1>
    }

    return (
        <div className="geral">
            <div className="display-conversor">
                <h1>Conversor de Moedas</h1>
                <span>Valor:</span>
                <input type='number' placeholder='Valor' value={valorAtual} onChange={(e) => setValorAtual(Number(e.target.value))} required />
                <span>Selecione a moeda</span>
                <select value={moedaAtual} onChange={(e) => setMoedaAtual(e.target.value)}>
                    {Object.keys(taxa).map((currency) => {
                        return <option value={currency} key={currency}>{currency}</option>
                    })}
                </select>
                <span>Para:</span>
                <select value={moedaEsperada} onChange={(e) => setMoedaEsperada(e.target.value)}>
                    {Object.keys(taxa).map((currency) => {
                        return <option value={currency} key={currency}>{currency}</option>
                    })}
                </select>
                <h3>{valorAtual} de {moedaAtual} para {moedaEsperada}</h3>
                <p>{valorConvertido} {moedaEsperada}<br/>
                <span>Taxa: {taxaConversaoAtual}</span></p>
            </div>
        </div>
    )
}

export default Conversor