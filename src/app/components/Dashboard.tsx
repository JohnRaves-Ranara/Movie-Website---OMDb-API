"use client"

import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Movies from "./Movies"
import Search from "./Search"


export type Movie = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID : string
}

const queryClient = new QueryClient()

export default function Dashboard() {
    
    return (
        <QueryClientProvider client={queryClient}>
            <Search></Search>
            <Movies></Movies>
        </QueryClientProvider>
    )
    
}