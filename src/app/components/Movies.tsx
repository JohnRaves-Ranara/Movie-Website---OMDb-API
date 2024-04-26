"use client";
import {useFetchAllGenres, useFetchMovies } from "../api/omdb_api";
import DiscoverMovies from "./DiscoverMovies";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import MovieNotFound from "./MovieNotFound";
import MovieSearchResults from "./MovieSearchResults";
import { useSearchParams } from "next/navigation";

export default function Movies() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const pageNum = searchParams.get("page")

  const {
    data: moviesRequest,
    isLoading: moviesReqLoading,
    isError: moviesReqIsError,
    error: moviesReqError,
  } = useFetchMovies(searchQuery!, Number(pageNum));
  const {
    data: allGenres,
    isLoading: allGenresLoading,
    isError: allGenresIsError,
    error: allGenresError,
  } = useFetchAllGenres();

  if (moviesReqLoading || allGenresLoading) {
    return <LoadingComponent />;
  }
  if (moviesReqIsError || allGenresIsError) {
    return (
      <ErrorComponent
        error={`Genres fetch error: ${allGenresError} Movies Req error: ${moviesReqError}`}
      />
    );
  }
   if(moviesRequest && allGenres) {
    const movies = moviesRequest!.results;
    return (
      <>
        {movies && movies.length !== 0 ? (
          searchQuery ? (
            <MovieSearchResults
              allGenres={allGenres}
              movies={movies}
              inputQuery={searchQuery}
              totalPages={moviesRequest.total_pages}
            />
          ) : (
            <DiscoverMovies movies={movies} allGenres={allGenres} />
          )
        ) : (
          <MovieNotFound />
        )}
      </>
    );
  }
}
