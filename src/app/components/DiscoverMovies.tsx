import MovieCard from "./MovieCard";
import { Genre, Movie } from "../utils/types";

type DiscoverMoviesProps = {
  movies: Movie[];
  allGenres: Genre[]
};

export default function DiscoverMovies({ movies, allGenres }: DiscoverMoviesProps) {
  return (
    <div className="min-h-screen bg-gray-950 pt-[18vh] px-24 pb-24">
      <h1 className="text-white text-[2.5vw] overflow-hidden mb-5">
        Discover Movies
      </h1>
      <div className="grid grid-cols-4 gap-16 text-white">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="flex flex-col gap-4">
              <MovieCard movie={movie} allGenres={allGenres}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
