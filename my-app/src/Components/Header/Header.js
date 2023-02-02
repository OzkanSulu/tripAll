import React from 'react'
import "./Header.css"
import {FaBed, FaPlane, FaCar, FaCalendarCheck} from "react-icons/fa" 
import {BsPeopleFill} from "react-icons/bs"
import Buttons from '../../helpers/Buttons'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerContainer'>
        <div className='headerList'>
        <div className='headerListItem active'>
        <FaBed />
        <span>Stays</span>
        </div>
        <div className='headerListItem '>
        <FaPlane />
        <span>Flights</span>
        </div>
        <div className='headerListItem'>
        <FaCar />
        <span>Car Rentals</span>
        </div>
        </div>
        </div>

        <div className='headerItems'>
        <div> 
            <h1 className='headerTitle'>Escape to Your Dream Destination</h1>
        </div>
        <div className='headerDescribtion'>
            <p>"Discover the world with our exclusive lifetime discount offer on flights and hotels."</p>
        </div>
        <div className='headerBtns'>
            <Buttons title="Register" />
            <Buttons title="Log In" />
        </div>
        </div>
        <div className='headerSearch'>
            <div className='searchItem'>
                <FaBed className='icon' />
                <input type="search" placeholder="Destination" classname="headerSearchInput"/>
            </div>
            <div className='searchItem'>
                <FaCalendarCheck className='icon'/>
                <span className='headerSearchText'>Date</span>
            </div>
            <div className='searchItem'>
                <BsPeopleFill className='icon'/>
                <span className='headerSearchText'>2 adults 2 children 1 room</span>
            </div>
            <div className=''>
                <button className='headerButton'> Search</button>
            </div>
        </div>
    </div>
  )
}
