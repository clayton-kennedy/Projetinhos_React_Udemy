import React, { useState } from 'react'
import "./Calculadora.css";

function Calculadora() {
  const auxiliares = ['%']
  const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operadores = ['/', '*', '-', '+'];
  const botaoVirgula = [',']
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [operadorEscolhido, setOperadorEscolhido] = useState("");
  const [resultado, setResultado] = useState(null);
  const [valorEscolhido, setValorEscolhido] = useState("0");
  const [primeiroValorVirgula, setPrimeiroValorVirgula] = useState(false)
  const [segundoValorVirgula, setSegundoValorVirgula] = useState(false)

  //Limpar
  const limpar = () => {
    setPrimeiroValor("");
    setSegundoValor("");
    setResultado(null);
    setOperadorEscolhido("");
    setValorEscolhido("0")
    setPrimeiroValorVirgula(false)
    setSegundoValorVirgula(false)
  }
  //Valor mostrado na tela quando usuário clica em um número
  const mostrarValorEscolhido = (num) => {
    if (operadorEscolhido === "") {
      // Primeiro valor
      if (num === ",") {
        if (primeiroValor === "") {
          return;
        }
        if (primeiroValorVirgula) {
          return;
        }
        setPrimeiroValorVirgula(true);
      }
      setPrimeiroValor(primeiroValor + num);
      setValorEscolhido(primeiroValor + num);
    } else {
      // Segundo valor
      if (num === ",") {
        if (segundoValor === "") {
          return;
        }
        if (segundoValorVirgula) {
          return;
        }
        setSegundoValorVirgula(true);
      }
      setSegundoValor(segundoValor + num);
      setValorEscolhido(segundoValor + num);
    }
  };

  //Operador escolhido
  const setOperador = (operador) => {
    if (primeiroValor === "") {
      return;
    } else {
      setOperadorEscolhido(operador);
      setValorEscolhido("0")
      setResultado(null);
      setSegundoValor("")
    }
  }

  //Calcular
  const calcular = () => {
    if (!primeiroValor || !segundoValor) {
      return;
    }
    switch (operadorEscolhido) {
      case '/':
        setResultado(parseFloat(primeiroValor) / parseFloat(segundoValor));
        break;
      case '*':
        setResultado(parseFloat(primeiroValor) * parseFloat(segundoValor));
        break;
      case '-':
        setResultado(parseFloat(primeiroValor) - parseFloat(segundoValor));
        break;
      case '+':
        setResultado(parseFloat(primeiroValor) + parseFloat(segundoValor));
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className="display-calculo">
        {primeiroValor}{operadorEscolhido}{segundoValor}
      </div>

      <div className="display">
        {resultado === null ? valorEscolhido : resultado}
      </div>

      <div className="botoes">
        <div className="lado_esquerdo">

          <div className="btns-auxiliares">
            <button className='btn-limpar' onClick={limpar}>C</button>
            {auxiliares.map((aux) => (
              <button className='btn-aux' key={aux}>{aux}</button>
            ))}
          </div>
          <div className="numeros">
            {numeros.map((num) => (
              <button className='btns-numeros' onClick={() => mostrarValorEscolhido(num)} key={num}>{num}</button>
            ))}
            <div className="botoesInf">
              {botaoVirgula.map((bi) => (
                <button className='btns-inf' onClick={() => mostrarValorEscolhido(bi)} key={bi}>{bi}</button>
              ))}
              <button className='btn-resultado' onClick={calcular}>=</button>
            </div>
          </div>
        </div>

        <div className="lado_direito">
          {operadores.map((op) => (
            <button className='btns-operadores' onClick={() => setOperador(op)} key={op}>{op}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculadora