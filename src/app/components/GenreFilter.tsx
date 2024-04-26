import { useState } from "react";
import { Genre } from "../utils/types";
import { useSelectedFiltersContext } from "../contexts/SelectedFiltersContext";

type GenreFilterProps = {
  genre: Genre;
};

export default function GenreFilter({ genre }: GenreFilterProps) {
  const {filters, setFilters} = useSelectedFiltersContext()

  return (
    <button
      onClick={() => {
        if(filters.includes(genre.id)){
          setFilters(filters.filter((filter) => filter !== genre.id))
        }
        else{
          setFilters([...filters, genre.id])
        }
      }}
      type="button"
      className={`rounded-full ${filters.includes(genre.id) ? "bg-purple-500 text-white" : "bg-purple-900 text-gray-400"} inline-flex items-center justify-center px-4 py-2 my-2`}
    >
      <p>{genre.name}</p>
    </button>
  );
}
