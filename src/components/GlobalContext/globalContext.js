import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const UserProvider = (props) => {

    const [data, setdata] = useState([
        { name: "", subject: "" },
    


    ]);

    return ( <GlobalContext.Provider value = { [data, setdata] } > { props.children } </ GlobalContext.Provider>);
};