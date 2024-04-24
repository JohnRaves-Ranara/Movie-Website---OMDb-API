import MoviePoster from "./MoviePoster";
import { Movie } from "../utils/types";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <>
      <Link href={`/movie-details/${movie.id}`}>
        <MoviePoster
          poster={movie.poster_path}
          vote_avg={movie.vote_average}
          isMovieDetailsPage={false}
        />
        <div className="text-center mt-5">
          <p className="line-clamp-2">{movie.title}</p>
          <p>{movie.release_date.split("-")[0]}</p>
        </div>
      </Link>
    </>
  );
}
