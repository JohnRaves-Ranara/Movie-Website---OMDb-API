"use client"
import { Dispatch, SetStateAction } from "react";
import { useFetchMovies } from "../api/omdb_api";
import DiscoverMovies from "./DiscoverMovies";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import MovieNotFound from "./MovieNotFound";
import MovieSearchResults from "./MovieSearchResults";
import { useSearchParams } from "next/navigation";

export default function Movies() {

  //get url parameters
  const searchParams = useSearchParams()
  const query = searchParams.get("query")
  console.log(query)
  console.log(query ? "QUERY EXISTS" : "QUERY DOESNT EXIST")

  //fetch data
  const {
    data: moviesRequest,
    isLoading,
    isError,
    error,
  } =  useFetchMovies(query ?? '');
  
  
  console.log(moviesRequest)

  if (isLoading) {
    return <LoadingComponent />;
  } else if (isError) {
    return <ErrorComponent error={error} />;
  } else {
    const movies = moviesRequest!.results;
    return (
      <>
        {movies && movies.length !== 0 ? (
          query ? (
            <MovieSearchResults movies={movies} inputQuery={query} />
          ) : (
            <DiscoverMovies movies={movies} />
          )
        ) : (
          <MovieNotFound />
        )}
      </>
    );
  }
}
