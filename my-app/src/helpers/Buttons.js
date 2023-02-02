import React from 'react'
import "./Buttons.css"
function Buttons({title}) {
  return (
    <div>
        <button className='Button'>{title}</button>
    </div>
  )
}

export default Buttons