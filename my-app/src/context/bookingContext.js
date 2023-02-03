import { createContext, useState } from "react";

export const bookContext = createContext();


export const BookProvider = ({ children }) => {
  const [adultCount, setAdultCount] = useState(1);
const [kidCount, setKidCount] = useState(0);
const [roomCount, setRoomCount] = useState(1);
  const [book, setBook] = useState(false);
  
  return (
    <bookContext.Provider value={{ adultCount, setAdultCount,kidCount, setKidCount,roomCount, setRoomCount,book, setBook}}>
      {children}
    </bookContext.Provider>
  );
};
