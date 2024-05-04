import MovieCard from "./MovieCard";
import { Genre, Movie } from "../utils/types";
import { IconFilterFilled } from "@tabler/icons-react";
import FilterDialog from "./FilterDialog";
import { useFilterDialogContext } from "../contexts/FilterDialogContext";
import { useSearchParams } from "next/navigation";

type DiscoverMoviesProps = {
  isFirstPage: boolean;
  movies: Movie[];
  allGenres: Genre[];
  totalResults: number;
};

export default function DiscoverMovies({
  movies,
  allGenres,
  isFirstPage,
  totalResults,
}: DiscoverMoviesProps) {
  const { isOpen, setIsOpen } = useFilterDialogContext();
  const searchParams = useSearchParams();
  const filters = searchParams.get("with_genres");

  return (
    <>
      {isFirstPage ? (
        <section className="pb-4">
          <FilterDialog allGenres={allGenres}></FilterDialog>
          <header className="flex items-center justify-between gap-8 mb-8">
            <h1 className="text-white text-md mobile-l:text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl overflow-hidden before:block before:h-8 before:w-[0.45rem] before:bg-purple-500 flex items-center gap-4">
              {filters
                ? `Showing ${totalResults} filter results`
                : "Discover Movies"}
            </h1>
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="relative flex items-center gap-3 px-4 py-2 bg-purple-500 rounded-full hover:bg-purple-800 group "
            >
              {filters && (
                <div className="box-content size-6 lg:size-8 grid place-items-center rounded-full text-gray-700 bg-yellow-400 -top-2 lg:-top-3 -right-2 lg:-right-3 absolute text-xs lg:text-base">
                  {`${filters.split(",").length || 0}`}
                </div>
              )}
              <p className="text-white text-2xs mobile-l:text-xs sm:text-sm xl:text-base">
                Filters
              </p>
              <IconFilterFilled color="white" size={15} />
            </button>
          </header>

          <section className="grid grid-cols-2 text-white md:grid-cols-4 lg:gap-x-8 xl:gap-x-16 gap-x-2 gap-y-4 lg:gap-y-5">
            {movies.map((movie) => {
              return (
                <MovieCard key={movie.id} movie={movie} allGenres={allGenres} />
              );
            })}
          </section>
        </section>
      ) : (
        <section className="pb-4">
          <section className="grid grid-cols-2 text-white md:grid-cols-4 lg:gap-x-8 xl:gap-x-16 auto-rows-auto gap-x-2 gap-y-4 lg:gap-y-5">
            {movies.map((movie) => {
              return (
                <MovieCard key={movie.id} movie={movie} allGenres={allGenres} />
              );
            })}
          </section>
        </section>
      )}
    </>
  );
}
