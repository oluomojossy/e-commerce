import { createContext } from "react";

export const Context = createContext();

const contextProvider=({children})=>{
    return(
        <Context.Provider value={["she", "He"]}>
            {children}
        </Context.Provider>
    )
}

export default contextProvider

