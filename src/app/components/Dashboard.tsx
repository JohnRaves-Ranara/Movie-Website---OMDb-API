"use client";

import {useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./Movies";
import Search from "./Search";
import { useDebounce } from "../custom-hooks/useDebounce";

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export type MoviesRequest = {
  page : number
  results : Movie[]
  total_pages : number
  total_results : number
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Dashboard() {
  // const [search, setSearch] = useState("");
  // const debouncedSearch = useDebounce(search, 500);

  return (
    <QueryClientProvider client={queryClient}>
      <Search></Search>
      <Movies></Movies>
    </QueryClientProvider>
  );
}
