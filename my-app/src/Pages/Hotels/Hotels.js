import React from 'react'
import Booking from '../../Components/Booking/Booking'
import Calander from '../../Components/Calander/Calander'
import Cities from '../../Components/Cities/Cities'
import Featured from '../../Components/Featured/Featured'
import "./Hotels.css"

export default function Hotels() {
  return (
    <div>
      <Calander />
      <Booking />
      <Cities />
      <Featured />
    </div>
  )
}
