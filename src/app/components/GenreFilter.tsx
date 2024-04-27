import { Genre } from "../utils/types";

type GenreFilterProps = {
  genre: Genre;
  handleSelectGenre : () => void
  isGenreSelected : boolean
};

export default function GenreFilter({ genre, handleSelectGenre, isGenreSelected }: GenreFilterProps) {

  return (
    <button
    onClick={handleSelectGenre}
      type="button"
      className={`rounded-full ${isGenreSelected ? "bg-purple-500 text-white" : "bg-purple-900 text-gray-400"} inline-flex items-center justify-center px-4 py-2 my-2`}
    >
      <p>{genre.name}</p>
    </button>
  );
}
