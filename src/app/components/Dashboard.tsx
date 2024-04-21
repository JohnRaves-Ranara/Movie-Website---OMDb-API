"use client";

import {useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./Movies";
import Search from "./Search";
import { useDebounce } from "../custom-hooks/useDebounce";
import FetchMoviesContextProvider from "../contexts/FetchMoviesContext";
import Pagination from '@mui/material/Pagination';
import UsePagination from "./UsePagination";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Dashboard() {

  return (
    <QueryClientProvider client={queryClient}>
      <FetchMoviesContextProvider>
        <Search></Search>
        <Movies></Movies>
      </FetchMoviesContextProvider>
    </QueryClientProvider>
  );
}
