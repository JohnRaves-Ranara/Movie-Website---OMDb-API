import { Genre, Movie } from "../utils/types";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

type MovieSearchResultsProps = {
  movies: Movie[];
  inputQuery: string;
  totalPages: number;
  allGenres: Genre[];
};

export default function MovieSearchResults({
  movies,
  inputQuery,
  totalPages,
  allGenres,
}: MovieSearchResultsProps) {
  return (
    <main className="pt-[12vh] sm:pt-[14vh] md:pt-[16vh] lg:pt-[18vh] xl:pt-[16vh] min-h-screen bg-gray-950 px-[4vw] lg:px-24 pb-24">
      <header className="flex items-center gap-8 mb-8">
        <h1 className="text-white text-base mobile-l:text-lg sm:text-2xl lg:text-3xl xl:text-4xl overflow-hidden before:block before:h-8 before:w-[0.45rem] before:bg-purple-500 flex items-center gap-4">
          Showing results for "{inputQuery}"
        </h1>
      </header>
      <section className="grid grid-cols-2 text-white md:grid-cols-4 lg:gap-x-8 xl:gap-x-16 gap-x-2 gap-y-4 lg:gap-y-5">
        {movies.map((movie) => {
          return (
            <MovieCard key={movie.id} movie={movie} allGenres={allGenres} />
          );
        })}
      </section>
      <Pagination totalPages={totalPages}/>
    </main>
  );
}
