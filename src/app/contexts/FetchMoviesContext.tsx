"use client"
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { createContext, useContext } from "react";
import { MoviesRequest } from "../utils/types";
import { useFetchMovies } from "../api/omdb_api";
import { UseQueryResult } from "@tanstack/react-query";


type FetchMoviesContextProviderProps = {
    children: React.ReactNode
}

type FetchMoviesContext = {
    fetchMovies : UseQueryResult<MoviesRequest, Error>
    searchQuery : string | null
}

export const FetchMoviesContext = createContext<FetchMoviesContext | null>(null)

export default function FetchMoviesContextProvider({children} : FetchMoviesContextProviderProps) {

    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("query")
    const pageNum = searchParams.get("page")

    //fetch data
    const fetchMovies =  useFetchMovies(searchQuery!, Number(pageNum));

    return (
        <FetchMoviesContext.Provider value={{
            fetchMovies, searchQuery
        }}>
            {children}
        </FetchMoviesContext.Provider>
    )
}


export function useFetchMoviesContext() {
    const context = useContext(FetchMoviesContext)
    if(!context){
        throw new Error("useFetchMoviesContext must be used within a FetchMoviesContextProvider.")
    }
    return context
}
