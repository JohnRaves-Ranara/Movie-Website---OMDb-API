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
        <div className="min-h-screen bg-gray-950 px-[4vw] lg:px-24 pt-[12vh] sm:pt-[14vh] md:pt-[16vh] lg:pt-[18vh] xl:pt-[16vh] pb-4">
          <FilterDialog allGenres={allGenres}></FilterDialog>
          <div className="flex gap-8 items-center mb-8 justify-between">
            <h1 className="text-white text-md mobile-l:text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl overflow-hidden before:block before:h-8 before:w-[0.45rem] before:bg-purple-500 flex items-center gap-4">
              {filters
                ? `Showing ${totalResults} filter results`
                : "Discover Movies"}
            </h1>
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="px-4 py-2 bg-purple-500 rounded-full flex items-center gap-3 hover:bg-purple-800 group relative "
            >
              {filters && (
                <div className="box-content p-2 rounded-full text-gray-700 bg-yellow-400 absolute -top-2 -right-10 text-[10px]">
                  {`${filters.split(",").length || 0} selected`}
                </div>
              )}
              <p className="text-white text-2xs mobile-l:text-xs sm:text-sm xl:text-base">
                Filters
              </p>
              <IconFilterFilled color="white" size={15} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-x-8 xl:gap-x-16 auto-rows-auto gap-x-2 gap-y-4 lg:gap-y-5 text-white">
            {movies.map((movie) => {
              return (
                <div key={movie.id} className="">
                  <MovieCard movie={movie} allGenres={allGenres} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-950 px-[4vw] lg:px-24 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-x-8 xl:gap-x-16 auto-rows-auto gap-x-2 gap-y-4 lg:gap-y-5 text-white">
            {movies.map((movie) => {
              return (
                <div key={movie.id} className="">
                  <MovieCard movie={movie} allGenres={allGenres} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
