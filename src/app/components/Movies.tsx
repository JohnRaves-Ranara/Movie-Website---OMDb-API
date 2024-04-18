import Image from "next/image";
import image from "/public/sample_poster.jpg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Dispatch, SetStateAction } from "react";

type MoviesProps = {
  search: string;
};

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export default function Movies({ search }: MoviesProps) {
  //fetch data
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery<Movie[], Error>({
    staleTime: 300000,
    queryKey: ["movies", search],
    queryFn: async () => {
      console.log('fetching')
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=8e46c852&s=${search}`
      );
      return data.Search;
    },
  });

  if (isLoading)
    return (
      <div className="min-h-screen bg-gray-950 flex justify-center items-center text-white">
        LOADING...
      </div>
    );

  if (isError)
    return (
      <div className="min-h-screen bg-gray-950 flex justify-center items-center text-white">
        {`ERROR! : ${error}`}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-950 place-items-center grid grid-cols-4 gap-16 text-white px-24 pt-[22vh] pb-24">
      {movies &&
        movies.map((movie) => {
          return (
            <div
              key={movie.imdbID}
              className="flex flex-col gap-4 items-center"
            >
              <MovieCard poster={movie.Poster} />
              <div className="text-center">
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
