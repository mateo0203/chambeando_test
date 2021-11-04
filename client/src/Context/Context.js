import React, {useState, createContext} from "react";
export const TrabajadoresContext = createContext();


const validateUserStatus = ()=>{
    if (localStorage.getItem('userInfo')){
        return JSON.parse(localStorage.getItem('userInfo'))
    }
    return ''
}


export const TrabajadoresContextProvider = props =>{
    const [trabajadores, setTrabajadores] = useState([])
    const [userInfo, setUserInfo] = useState(validateUserStatus)
    return (
        <TrabajadoresContext.Provider value={{trabajadores, setTrabajadores, userInfo}}>
            {props.children}
        </TrabajadoresContext.Provider>
    )
}