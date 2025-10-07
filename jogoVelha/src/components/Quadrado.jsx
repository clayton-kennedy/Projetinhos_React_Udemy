import React from 'react'

function Quadrado({ value, onClick }) {
  return (
    <div>
        <button className='quadrado' onClick={onClick} >{value}</button>
    </div>
  )
}

export default Quadrado