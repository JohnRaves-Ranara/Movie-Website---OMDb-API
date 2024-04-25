import { Dispatch, SetStateAction, useContext, useState } from "react"
import { createContext } from "react"
import { Genre } from "../utils/types"

export type GenresContext = {
    allGenresState: Genre[]
    setAllGenresState: Dispatch<SetStateAction<Genre[]>>
}

const GenresContext = createContext<GenresContext | null>(null)

export default function GenresContextProvider({children} : {children:React.ReactNode}){

    const [allGenresState, setAllGenresState] = useState<Genre[]>([])

    return (
        <GenresContext.Provider value={{
            allGenresState,
            setAllGenresState
        }}>
            {children}
        </GenresContext.Provider>
    )
}

export function useGenresContextProvider(){
    const context = useContext(GenresContext)
    if(!context){
        throw new Error("useGenresContextProvider must be used within a GenresContextProvider")
    }
    return context
}