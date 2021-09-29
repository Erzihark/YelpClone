import React, {useState, createContext} from "react";

export const NechromaticsContext = createContext();

export const NechromaticsContextProvider = (props) => {

    const [nechromatics, setNechromatics] = useState([])

    return(
        //Context provider makes it so that every child inside the
        //<context.provider has access to 'value'
        <NechromaticsContext.Provider value={{nechromatics: nechromatics, setNechromatics}}>
            {props.children}
        </NechromaticsContext.Provider>
    )
}