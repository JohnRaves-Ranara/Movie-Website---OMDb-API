import Image from "next/image";
import React from "react";
import { Genre, Movie } from "../utils/types";

type MoviePosterProps = {
  movie: Movie;
  isMovieDetailsPage: boolean;
  genres?: Genre[];
};

export default function MoviePoster({
  movie,
  isMovieDetailsPage,
  genres,
}: MoviePosterProps) {
  const poster = movie.poster_path;
  const vote_avg = movie.vote_average;
  let genresOfMovie;
  
  if (genres) {
    genresOfMovie = movie.genre_ids.map((genreID) => {
      let foundGenreById = genres.find((genre) => genre.id === genreID);
      return foundGenreById!.name
    });
  }
  return (
    <>
      <div className="bg-gray-600 overflow-hidden group relative h-[400px] w-[300px]">
        {!isMovieDetailsPage && (
          <div className="bg-black/50 opacity-0 absolute z-10 text-black group-hover:opacity-100 transition-opacity size-full flex flex-col justify-center gap-8 items-center">
            <p className="text-2xl font-bold">
              <span className="text-purple-500">{vote_avg.toFixed(1)}</span>
              <span className="text-gray-300">/10</span>
            </p>
            <div className="text-gray-300 flex flex-wrap justify-center w-full items-center gap-4 text-sm pl-6 pr-10">
              {genres &&
                genresOfMovie?.map((genre) => {
                  return <em className="pr-[2px]">{genre}</em>;
                })}
            </div>
          </div>
        )}
        {poster ? (
          <Image
            quality={10}
            // height={400}
            // width={300}
            fill={true}
            src={`https://image.tmdb.org/t/p/original${poster}`}
            className="object-cover group-hover:scale-110 transition-transform w-full h-auto"
            alt=""
          ></Image>
        ) : (
          // <img
          //   loading="lazy"
          //   src={`https://image.tmdb.org/t/p/original${poster}`}
          //   alt=""
          //   className="size-full object-cover group-hover:scale-110 transition-transform"
          // />
          <div className="bg-gray-600 flex items-center justify-center h-[400px]">
            No Image Available
          </div>
        )}
      </div>
    </>
  );
}
