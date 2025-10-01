import React from 'react'
import './Controle.css'

function Controle({iniciar, parar, zerar}) {
  return (
    <div className="botoes">
      <button className='btn-iniciar' onClick={iniciar}>Iniciar</button>
      <button className='btn-pausar' onClick={parar}>Pausar</button>
      <button className='btn-zerar' onClick={zerar}>Zerar</button>
    </div>
  )
}

export default Controle