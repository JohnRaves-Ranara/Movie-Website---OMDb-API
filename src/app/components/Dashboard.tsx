"use client";
import Movies from "./Movies";
import Search from "./Search";
import Providers from "../utils/providers";

export default function Dashboard() {
  return (
    <Providers>
      <Search></Search>
      <Movies></Movies>
    </Providers>
  );
}
