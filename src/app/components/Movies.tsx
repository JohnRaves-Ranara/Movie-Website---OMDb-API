"use client";
import { Dispatch, SetStateAction } from "react";
import { useFetchMovies } from "../api/omdb_api";
import DiscoverMovies from "./DiscoverMovies";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import MovieNotFound from "./MovieNotFound";
import MovieSearchResults from "./MovieSearchResults";
import { useSearchParams } from "next/navigation";
import { useFetchMoviesContext } from "../contexts/FetchMoviesContext";

export default function Movies() {
  const fetchMoviesContext = useFetchMoviesContext();
  const {
    data: moviesRequest,
    isLoading,
    isError,
    error,
  } = fetchMoviesContext.fetchMovies;
  const searchQuery = fetchMoviesContext.searchQuery;

  if (isLoading) {
    return <LoadingComponent />;
  } else if (isError) {
    return <ErrorComponent error={error} />;
  } else {
    const movies = moviesRequest!.results;
    return (
      <>
        {movies && movies.length !== 0 ? (
          searchQuery ? (
            <MovieSearchResults movies={movies} inputQuery={searchQuery} totalPages={moviesRequest!.total_pages}/>
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
