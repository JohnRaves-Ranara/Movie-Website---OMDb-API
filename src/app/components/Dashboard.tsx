"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movies from "./Movies";
import Search from "./Search";
import FilterDialogContextProvider from "../contexts/FilterDialogContext";
import Providers from "../utils/providers";

export default function Dashboard() {
  return (
    <Providers>
      <Search></Search>
      <Movies></Movies>
    </Providers>
  );
}
