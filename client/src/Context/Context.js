import React, {useState, createContext} from "react";
export const TrabajadoresContext = createContext();

export const TrabajadoresContextProvider = props =>{
    const [trabajadores, setTrabajadores] = useState([])
    return (
        <TrabajadoresContext.Provider value={{trabajadores, setTrabajadores}}>
            {props.children}
        </TrabajadoresContext.Provider>
    )
}