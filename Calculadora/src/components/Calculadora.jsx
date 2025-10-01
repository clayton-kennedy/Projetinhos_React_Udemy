import React from 'react'
import "./Calculadora.css";
import { useState } from 'react';

function Calculadora() {
  const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operadores = ['+', '-', '*', '/'];


  return (
    <div className="container">
      <div className="display-calculo">
        {operacaoCompleta}
      </div>

      <div className="display">
        {valorAtual}
      </div>

        <button className='btn-AC'onClick={limpar} >AC</button>
      <div className="botoes">
        <div className="lado_esquerdo">
          {numeros.map((num) => (
            <button className='btns' onClick={() => handleClick(num)} key={num}>{num}</button>
          ))}

        </div>
        <div className="lado_direito">
          {operadores.map((op) => (
            <button className='btns' onClick={() => buscarOperador(op)} key={op}>{op}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculadora