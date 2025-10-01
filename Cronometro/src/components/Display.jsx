import React from 'react'
import './Display.css'

function Display({time}) {
  return (
    <div className="display">
      00:{time}
    </div>
  )
}
export default Display