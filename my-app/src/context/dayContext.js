import { createContext, useState } from "react";


export const dayContext=createContext();
export const DayProvider= ({children})=>{
    const [day,setDay] =useState(false);
    return(
        <dayContext.Provider value={{day,setDay}}>
            {children}
        </dayContext.Provider>
    )
}

