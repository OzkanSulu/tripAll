import React, { useContext } from "react";
import { bookContext } from "../../context/bookingContext";

function Booking() {
  
  const {adultRef,kidRef,roomRef,book,setBook} = useContext(bookContext)

  const closeBook = ()=>{
    setBook(false)
  }

  return (
    <div className={`booking ${book?"active" : "hidden"}`}>
      <div>
        <div>
          <span>Adult:</span>
          <button onClick={() =>adultRef.current++}>+</button>
          <p>{adultRef.current}</p>
          <button onClick={()=> adultRef>0 && adultRef.current--} >-</button>
        </div>
        <div>
          <span>Children:</span>
          <button onClick={()=>kidRef.current++}>+</button>
          <p>{kidRef.current}</p>
          <button onClick={()=>kidRef.current>0&&kidRef.current--}>-</button>
        </div>
        <div>
          <span>Room:</span>
          <button onClick={()=>roomRef.current++}>+</button>
          <p>{roomRef.current}</p>
          <button onClick={()=> roomRef.current&&roomRef.current--} >-</button>
        </div>
      </div>
      <button onClick={closeBook}>Done</button>
    </div>
  );
}

export default Booking;
