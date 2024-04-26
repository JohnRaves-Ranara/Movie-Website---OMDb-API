"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./Movies";
import Search from "./Search";
import FilterDialogContextProvider from "../contexts/FilterDialogContext";
import FilterDialog from "./FilterDialog";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function Dashboard() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterDialogContextProvider>
          <Search></Search>
          <Movies></Movies>
      </FilterDialogContextProvider>
    </QueryClientProvider>
  );
}
