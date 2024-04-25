"use client";
import { Dispatch, SetStateAction } from "react";
import { useFetchMovies } from "../api/omdb_api";
import DiscoverMovies from "./DiscoverMovies";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import MovieNotFound from "./MovieNotFound";
import MovieSearchResults from "./MovieSearchResults";
import { useSearchParams } from "next/navigation";

export default function Movies() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const pageNum = searchParams.get("page");

  const {
    data: moviesRequest,
    isLoading,
    isError,
    error,
  } = useFetchMovies(searchQuery!, Number(pageNum));

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
            <MovieSearchResults
              movies={movies}
              inputQuery={searchQuery}
              totalPages={moviesRequest!.total_pages}
            />
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
