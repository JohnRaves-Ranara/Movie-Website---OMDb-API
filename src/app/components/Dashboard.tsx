"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./Movies";
import Search from "./Search";
import FetchMoviesContextProvider from "../contexts/FetchMoviesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
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
