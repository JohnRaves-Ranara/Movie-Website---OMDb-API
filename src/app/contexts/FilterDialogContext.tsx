"use client";
import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type FilterDialogContextProps = {
    children: React.ReactNode
}

type FilterDialogContext = {
    isOpen : boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const FilterDialogContext = createContext<FilterDialogContext | null>(null)

export default function FilterDialogContextProvider({children} : FilterDialogContextProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <FilterDialogContext.Provider value={{
            isOpen, setIsOpen
        }}>
            {children}
        </FilterDialogContext.Provider>
    )
}

export function useFilterDialogContext(){
    const context = useContext(FilterDialogContext)
    if(!context){
        throw new Error("useFilterDialogContext must be used within a FilterDialogContextProvider")
    }
    return context
}