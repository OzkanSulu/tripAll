import React, { useContext } from "react";
import "./Header.css";
import { FaBed, FaPlane, FaCar, FaCalendarCheck } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import Buttons from "../../helpers/Buttons";
import { dayContext } from "../../context/dayContext";
import { bookContext } from "../../context/bookingContext";


export default function Header() {
  

  let today=new Date()

  
  const {day,setDay} = useContext(dayContext)
  const {
    adultCount,
    
    kidCount,
    
    roomCount,
    
    book,
    setBook,
  } = useContext(bookContext);
 

  const handleToggle = (()=>{
    setDay(!day)
    setBook(false)
  })

  const bookShow = () => {
    setBook(!book)
    setDay(false)
  }



  const displayDay = ()=>{
    setDay(false)
    setBook(false)
  }
  
    
  return (
    <div className="header">
      <div>
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem ">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FaCar />
            <span>Car Rentals</span>
          </div>
        </div>
      </div>

      <div className="headerItems">
        <div>
          <h1 className="headerTitle">Escape to Your Dream Destination</h1>
        </div>
        <div className="headerDescribtion">
          <p>
            "Discover the world with our exclusive lifetime discount offer on
            flights and hotels."
          </p>
        </div>
        <div className="headerBtns">
          <Buttons title="Register" />
          <Buttons title="Log In" />
        </div>
      </div>
      <div className="headerSearch">
        <div className="searchItem" onClick={displayDay}>
          <FaBed className="icon" />
          <input
            type="search"
            placeholder="Destination"
            classname="headerSearchInput"
            
          />
        </div>
        <div className="searchItem" onClick={handleToggle}>
          <FaCalendarCheck className="icon" />
          <span className="headerSearchText">{`${today.toLocaleDateString()} to MM/DD/YYYY`}</span>
         
        </div>
        
        <div className="searchItem" onClick={bookShow}>
          <BsPeopleFill className="icon" />
          <span className="headerSearchText">{`Adult:${adultCount} - Children:${kidCount} - Room:${roomCount}`}</span>
        </div>
        <div className="" onClick={displayDay}>
          <button className="headerButton"> Search</button>
        </div>
      </div>
      </div>
      
    </div>
  );
}