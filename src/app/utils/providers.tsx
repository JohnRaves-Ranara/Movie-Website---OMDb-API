"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FilterDialogContextProvider from "../contexts/FilterDialogContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FilterDialogContextProvider>
            {children}
      </FilterDialogContextProvider>
    </QueryClientProvider>
  );
}
