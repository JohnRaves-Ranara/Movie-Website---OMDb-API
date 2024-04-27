"use client";
import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type SelectedFiltersContextProps = {
    children: React.ReactNode
}

type SelectedFiltersContext = {
    filters: any[]
    setFilters: Dispatch<SetStateAction<any[]>>
}

export const SelectedFiltersContext = createContext<SelectedFiltersContext | null>(null)

export default function SelectedFiltersContextProvider({children} : SelectedFiltersContextProps){
    const [filters, setFilters] = useState<any[]>([])
    
    useEffect(() => {
        console.log(filters)
    }, [filters])

    return <SelectedFiltersContext.Provider value={{
        filters,
        setFilters
    }}>
        {children}
    </SelectedFiltersContext.Provider>
}

export function useSelectedFiltersContext(){
    const context = useContext(SelectedFiltersContext)
    if(!context){
        throw new Error("useSelectedFiltesContext must be used within a SelectedFiltersContextProvider")
    }
    return context
}


