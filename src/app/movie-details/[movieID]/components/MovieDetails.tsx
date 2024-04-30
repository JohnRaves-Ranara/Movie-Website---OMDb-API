"use client";
import { useFetchMovieDetails } from "@/app/api/tmdb_api";
import MovieBackdrop from "./MovieBackdrop";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import MoviePoster from "@/app/components/MoviePoster";
import Info from "./Info";

type MovieDetailsProps = {
  movieID: number;
};

//@ts-ignore
const imdbIcon : IconProp = 'fa-brands fa-imdb'

export default function MovieDetails({ movieID }: MovieDetailsProps) {
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useFetchMovieDetails(movieID);

  if (isLoading) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-950 text-white">
        LOADING...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-950 text-white">
        ERROR {error.toString()}
      </div>
    );
  }
  if (movie) {
    return (
      <div className="h-screen bg-gray-950 relative">
        <div className="absolute size-full bg-black/50 flex justify-center items-center z-10 gap-12">
          <MoviePoster movie={movie} isMovieDetailsPage={true}></MoviePoster>
          <Info movie={movie}></Info>
        </div>
        <MovieBackdrop backdrop={movie.backdrop_path}></MovieBackdrop>
      </div>
    );
  }
}
