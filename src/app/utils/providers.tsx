"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GenresContextProvider, {
  useGenresContextProvider,
} from "@/app/contexts/GenresContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
