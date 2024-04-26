//TBD
// import { Dispatch, SetStateAction, useContext, useState } from "react"
// import { createContext } from "react"
// import { Genre } from "../utils/types"
// import { useFetchAllGenres } from "../api/omdb_api"
// import { UseQueryResult } from "@tanstack/react-query"

// export type GenresContext = {
//     allGenres: UseQueryResult<Genre[], Error>
// }

// const GenresContext = createContext<GenresContext | null>(null)

// export default function GenresContextProvider({children} : {children:React.ReactNode}){

//     const allGenres = useFetchAllGenres()

//     return (
//         <GenresContext.Provider value={{
//             allGenres
//         }}>
//             {children}
//         </GenresContext.Provider>
//     )
// }

// export function useGenresContextProvider(){
//     const context = useContext(GenresContext)
//     if(!context){
//         throw new Error("useGenresContextProvider must be used within a GenresContextProvider")
//     }
//     return context
// }