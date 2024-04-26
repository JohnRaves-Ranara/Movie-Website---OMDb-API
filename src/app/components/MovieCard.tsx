import MoviePoster from "./MoviePoster";
import { Genre, Movie } from "../utils/types";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
  allGenres: Genre[]
};

export default function MovieCard({ movie, allGenres}: MovieCardProps) {
  return (
    <>
      <Link href={`/movie-details/${movie.id}`} className="w-[300px]">
        <MoviePoster
          movie={movie}
          isMovieDetailsPage={false}
          allGenres={allGenres}
        />
        <div className="text-center mt-5">
          <p className="line-clamp-2">{movie.title}</p>
          <p>{movie.release_date.split("-")[0]}</p>
        </div>
      </Link>
    </>
  );
}
