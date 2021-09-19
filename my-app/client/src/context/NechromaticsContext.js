import React, {useState, createContext} from "react";

export const NechromaticsContext = createContext();

export const NechromaticsContextProvider = props => {

    const [nechromatics, setNechromatics] = useState([])

    return( //we could use value={{nechromatics}}
        <NechromaticsContext.Provider value={{nechromatics: nechromatics, setNechromatics}}>
            {props.children}
        </NechromaticsContext.Provider>
    )
}