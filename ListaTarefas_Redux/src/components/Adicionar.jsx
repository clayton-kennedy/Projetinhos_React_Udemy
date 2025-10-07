import React from 'react'

function Adicionar() {
  return (
    <form>
        <input type='text' placeholder='Adicione uma tarefa...'/>
        <button type='submit' className='btn-enviar'>Enviar</button>
    </form>
  )
}

export default Adicionar