import { useState } from "react";
import { Genre } from "../utils/types";

type GenreFilterProps = {
  genre: Genre;
};

export default function GenreFilter({ genre }: GenreFilterProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      onClick={() => {
        setIsSelected(!isSelected)
      }}
      type="button"
      className={`relative rounded-full hover:bg-purple-800 ${isSelected ? "bg-purple-500 text-white" : "bg-purple-900 text-gray-400"} inline-flex items-center justify-center px-4 py-2 my-2`}
    >
      <p>{genre.name}</p>
    </button>
  );
}
