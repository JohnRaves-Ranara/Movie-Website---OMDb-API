"use client";

import {useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./Movies";
import Search from "./Search";
import { useDebounce } from "../custom-hooks/useDebounce";

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
      <Search></Search>
      <Movies></Movies>
    </QueryClientProvider>
  );
}
