import MoviePoster from "./MoviePoster";
import { Genre, Movie } from "../utils/types";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
  allGenres: Genre[];
};

export default function MovieCard({ movie, allGenres }: MovieCardProps) {
  return (
    <Link
      href={`/${movie.id}`}
      className="flex flex-col w-full text-2xs mobile-l:text-xs sm:text-sm xl:text-base overflow-hidden"
    >
      <MoviePoster
        movie={movie}
        isMovieDetailsPage={false}
        allGenres={allGenres}
      />
      <div className="text-center mt-3 space-y-1 px-4">
        <p className="line-clamp-2">{movie.title}</p>
        <p className="text-gray-400/70">{movie.release_date?.split("-")[0]}</p>
      </div>
    </Link>
  );
}
