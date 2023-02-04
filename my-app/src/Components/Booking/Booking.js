import React, { useContext } from "react";
import { bookContext } from "../../context/bookingContext";
import "./Booking.css"

function Booking() {
  const {
    adultCount,
    setAdultCount,
    kidCount,
    setKidCount,
    roomCount,
    setRoomCount,
    book,
    setBook
  } = useContext(bookContext);

  const handleBook = () =>{
    setBook(!book)
  }

  return (
    <div className={`booking ${book ? "active" : "hidden"}`}>
      <div className="bookContainer">
      <div className="bookItems">
          <span>Adult:</span>
          <div className="bookButton">
          <button onClick={() => setAdultCount(adultCount + 1)}>+</button>
          <p>{adultCount}</p>
          <button disabled={adultCount===1} onClick={() => adultCount > 1 && setAdultCount(adultCount - 1)}>
            -
          </button>
          </div>
        </div>
        <div className="bookItems">
          <span>Children:</span>
          <div className="bookButton">
          <button onClick={() => setKidCount(kidCount + 1)}>+</button>
          <p>{kidCount}</p>
          <button disabled={kidCount===0} onClick={() => kidCount > 0 && setKidCount(kidCount - 1)}>
            -
          </button>
          </div>
        </div>
        <div className="bookItems">
          <span>Room:</span>
          <div className="bookButton">
          <button onClick={() => setRoomCount(roomCount + 1)}>+</button>
          <p>{roomCount}</p>
          <button disabled={roomCount===1} onClick={() => roomCount > 1 && setRoomCount(roomCount - 1)}>
            -
          </button>
          </div>
        </div>
        <div className="done">
        <button onClick={handleBook} className="doneBtn" >Done</button>
        </div>
      </div>
      
    </div>
  );
}

export default Booking;
