import { createContext, useRef, useState } from "react";

export const bookContext = createContext();

export const BookProvider = ({ children }) => {
  const adultRef = useRef(0);
  const kidRef = useRef(0);
  const roomRef = useRef(0);
  const [book, setBook] = useState(false);
  return (
    <bookContext.Provider value={{ adultRef, kidRef, roomRef, book, setBook }}>
      {children}
    </bookContext.Provider>
  );
};
