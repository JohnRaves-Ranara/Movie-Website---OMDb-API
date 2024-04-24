"use client";
import { useFetchMovieDetails } from "@/app/api/omdb_api";
import Image from "next/image";
import MovieBackdrop from "./MovieBackdrop";
import { IconStarFilled } from "@tabler/icons-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
        <div className="absolute size-full text-black bg-black/50 flex justify-center items-center z-10 gap-12">
          <img
            className="h-[400x] w-[300px]"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
          <div className="text-white h-content max-w-[50vw]">
            <h1 className="text-4xl mb-4 line-clamp-3 font-semibold">
              {movie.title}
            </h1>
            <h2 className="text-xl font-light mb-4">
              {movie.release_date.split("-")[0]}
            </h2>
            <div className="flex gap-2 mb-6 font-thin">
              <p>{movie.runtime} min</p>
              <p>|</p>
              <div>
                {movie.genres.map((genre, index) => {
                  if (index === movie.genres.length - 1) {
                    return <span className="pr-1"><em>{genre.name}</em></span>;
                  } else {
                    return <span><em>{genre.name}, </em></span>;
                  }
                })}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              {/* <IconStarFilled color="yellow" size={30}></IconStarFilled> */}
              <span className="text-yellow-400 font-normal">Rating:</span>
              <p className="line-clamp-1 font-light">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
            <p className="text-md font-thin">{movie.overview}</p>
          </div>
        </div>
        <MovieBackdrop backdrop={movie.backdrop_path}></MovieBackdrop>
      </div>
    );
  }
}
