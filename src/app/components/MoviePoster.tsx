import Image from "next/image";
import React from "react";
import { Genre, Movie } from "../utils/types";

type MoviePosterProps = {
  movie: Movie;
  isMovieDetailsPage: boolean;
  allGenres?: Genre[];
};

export default function MoviePoster({
  movie,
  isMovieDetailsPage,
  allGenres,
}: MoviePosterProps) {
  const poster = movie.poster_path;
  const vote_avg = movie.vote_average;
  let genreNamesOfMovie;
  let genreIdsOfMovie = movie.genre_ids

  if (allGenres) {
    genreNamesOfMovie = genreIdsOfMovie?.map((genreId) => {
      let foundGenre = allGenres.find((genre) => genre.id === genreId);
      return foundGenre!.name
    });
  }
  return (
    <>
      <div
        className={`bg-gray-600 group relative h-[60vw] md:h-[33vw] lg:h-[30vw] ${
          isMovieDetailsPage ? "w-[300px]" : "w-full"
        } overflow-hidden`}
      >
        {!isMovieDetailsPage && (
          <div className="absolute z-10 flex flex-col items-center justify-center gap-8 text-black transition-opacity opacity-0 bg-black/50 group-hover:opacity-100 size-full">
            <p className="text-2xl font-bold">
              <span className="text-purple-500">{vote_avg?.toFixed(1)}</span>
              <span className="text-gray-300">/10</span>
            </p>
            <div className="flex flex-wrap items-center justify-center w-full gap-4 px-6 text-sm text-gray-300">
              {allGenres &&
                genreNamesOfMovie?.map((genreName, index) => {
                  return (
                    <em key={index} className="pr-[2px]">
                      {genreName}
                    </em>
                  );
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
            className="object-cover w-full h-auto transition-transform group-hover:scale-110"
            alt=""
          ></Image>
        ) : (
          // <img
          //   loading="lazy"
          //   src={`https://image.tmdb.org/t/p/original${poster}`}
          //   alt=""
          //   className="object-cover transition-transform size-full group-hover:scale-110"
          // />
          <div className="bg-gray-600 flex items-center justify-center h-[400px]">
            No Image Available
          </div>
        )}
      </div>
    </>
  );
}
