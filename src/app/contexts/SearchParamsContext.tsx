"use client"
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { createContext, useContext } from "react";

type SearchParamsContextProviderProps = {
    children: React.ReactNode
}

type SearchParamsContext = {
    searchParams : ReadonlyURLSearchParams
}

export const SearchParamsContext = createContext<SearchParamsContext | null>(null)

export default function SearchParamsContextProvider({children} : SearchParamsContextProviderProps) {

    const searchParams = useSearchParams()

    return (
        <SearchParamsContext.Provider value={{
            searchParams
        }}>
            {children}
        </SearchParamsContext.Provider>
    )
    
}

export function useSearchParamsContext(){
    const context = useContext(SearchParamsContext)
    if(!context){
        throw new Error("useSearchParamsContext must be used within a SearchParamsContextProvider")
    }
    return context
}