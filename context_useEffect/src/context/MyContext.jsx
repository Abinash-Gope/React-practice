import { Children, createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({Children}) => {
    const [count, setCount] = useState()


    return <MyStore.Provider value={{count, setCount}}>{Children}</MyStore.Provider>
};