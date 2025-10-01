import React from 'react'
import "./Calculadora.css";
import { useState } from 'react';

function Calculadora() {
  const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '='];
  const operadores = ['+', '-', '*', '/'];
  const [valorAtual, setValorAtual] = useState("0")
  const [operacaoAtual, setOperacaoAtual] = useState(null)
  const [resultadoAtual, setResultadoAtuual] = useState(null)
  const [operacaoCompleta, setOperacaoCompleta] = useState(null)

  const handleClick = (valor) => {
    setValorAtual(anteriorOperacao => {
      if (anteriorOperacao == '0') {
        return valor;
      } else {
        return anteriorOperacao + valor;
      }
    })
    setOperacaoCompleta((anteriorOperacao) => anteriorOperacao + valor);
  }

  return (
    <div className="container">
      <div className="display-calculo">
        {operacaoCompleta}
      </div>

      <div className="display">
        {valorAtual}
      </div>

        <button className='btn-AC'>AC</button>
      <div className="botoes">
        <div className="lado_esquerdo">
          {numeros.map((num) => (
            <button className='btns' onClick={() => handleClick(num)} key={num}>{num}</button>
          ))}

        </div>
        <div className="lado_direito">
          {operadores.map((op) => (
            <button className='btns' key={op}>{op}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculadora