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
        className={`bg-gray-600 group relative ${
          isMovieDetailsPage ? "w-[50vw] h-[60vw] lg:h-[40vw] max-h-[400px] max-w-[300px]" : "w-full h-[60vw] md:h-[33vw] lg:h-[30vw]"
        } overflow-hidden`}
      >
        {!isMovieDetailsPage && (
          <div className="absolute z-10 flex flex-col items-center justify-center gap-8 overflow-auto text-black transition-opacity opacity-0 bg-black/50 group-hover:opacity-100 size-full">
            <strong className="text-lg lg:text-2xl">
              <span className="text-purple-500">{vote_avg?.toFixed(1)}</span>
              <span className="text-gray-300">/10</span>
            </strong>
            <div className="flex flex-wrap items-center justify-center w-full gap-2 px-6 text-gray-300">
              {allGenres &&
                genreNamesOfMovie?.map((genreName, index) => {
                  return (
                    <em key={index} className="pr-[2px]">
                      {genreName==="Science Fiction" ? "Sci-Fi" : genreName}
                    </em>
                  );
                })}
            </div>
          </div>
        )}
        {poster ? (
          <Image
            quality={10}
            fill={true}
            src={`https://image.tmdb.org/t/p/original${poster}`}
            className="object-cover w-full h-auto transition-transform group-hover:scale-110"
            alt=""
          ></Image>
        ) : (
          <div className="flex items-center justify-center bg-gray-600 size-full">
            No Image Available
          </div>
        )}
      </div>
    </>
  );
}
