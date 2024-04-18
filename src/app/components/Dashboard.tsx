"use client"

import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Movies from "./Movies"
import Search from "./Search"
import { useDebounce } from "../custom-hooks/useDebounce"


export type Movie = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID : string
}

const queryClient = new QueryClient()

export default function Dashboard() {
    
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebounce(search, 500)

    return (
        <QueryClientProvider client={queryClient}>
            <Search search={search} setSearch={setSearch}></Search>
            <Movies search={debouncedSearch}></Movies>
        </QueryClientProvider>
    )
    
}