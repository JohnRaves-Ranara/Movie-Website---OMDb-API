import MoviePoster from "./MoviePoster";
import { Genre, Movie } from "../utils/types";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
  genres: Genre[]
};

export default function MovieCard({ movie, genres}: MovieCardProps) {
  return (
    <>
      <Link href={`/movie-details/${movie.id}`}>
        <MoviePoster
          movie={movie}
          isMovieDetailsPage={false}
          genres={genres}
        />
        <div className="text-center mt-5">
          <p className="line-clamp-2">{movie.title}</p>
          <p>{movie.release_date.split("-")[0]}</p>
        </div>
      </Link>
    </>
  );
}
