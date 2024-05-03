import { Genre } from "../utils/types";

type GenreFilterProps = {
  genre: Genre;
  handleSelectGenre: () => void;
  isGenreSelected: boolean;
};

export default function GenreFilter({
  genre,
  handleSelectGenre,
  isGenreSelected,
}: GenreFilterProps) {
  return (
    <button
      onClick={handleSelectGenre}
      type="button"
      className={`rounded-full ${
        isGenreSelected
          ? "bg-purple-500 text-white"
          : "bg-purple-900 text-gray-400"
      } inline-flex items-center justify-center px-3 py-1 mobile-l:px-[0.85rem] mobile-l:py-[0.4rem] mobile-m:py-[0.35rem] md:px-4 md:py-2 my-1`}
    >
      <p>{genre.name}</p>
    </button>
  );
}
