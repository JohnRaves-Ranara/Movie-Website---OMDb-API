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
      <div className="bg-gray-600 group relative h-[60vw] md:h-[33vw] lg:h-[30vw] w-full overflow-hidden">
        {!isMovieDetailsPage && (
          <div className="bg-black/50 opacity-0 absolute z-10 text-black group-hover:opacity-100 transition-opacity size-full flex flex-col justify-center gap-8 items-center">
            <p className="text-2xl font-bold">
              <span className="text-purple-500">{vote_avg?.toFixed(1)}</span>
              <span className="text-gray-300">/10</span>
            </p>
            <div className="text-gray-300 flex flex-wrap justify-center w-full items-center gap-4 text-sm px-6">
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
