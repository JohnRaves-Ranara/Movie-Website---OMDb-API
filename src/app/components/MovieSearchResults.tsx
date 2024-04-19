import { Movie } from "./Dashboard";
import MovieCard from "./MovieCard";
import MoviePoster from "./MoviePoster";

type MovieSearchResultsProps = {
  movies: Movie[];
};

export default function MovieSearchResults({
  movies,
}: MovieSearchResultsProps) {
  return (
    <div className="min-h-screen bg-gray-950 pt-[18vh] px-24 pb-24 grid grid-cols-4 gap-16 text-white">
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="flex flex-col gap-4">
            <MovieCard movie={movie}/>
          </div>
        );
      })}
    </div>
  );
}
