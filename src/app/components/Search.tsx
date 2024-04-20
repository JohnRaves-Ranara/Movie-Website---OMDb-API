"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useDebounce } from "../custom-hooks/useDebounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="w-screen py-8 fixed px-24 z-20">
      <input
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get("query")?.toString()}
        placeholder="Enter movie title here..."
        type="text"
        className="bg-gray-800/80 w-full px-5 py-4 text-lg rounded-lg text-white"
      />
    </div>
  );
}
