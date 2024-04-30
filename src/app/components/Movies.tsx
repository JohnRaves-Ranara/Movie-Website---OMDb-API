"use client";
import {
  useFetchAllGenres,
  useInfiniteFetchDiscoverMovies,
  useFetchMovieSearchResults,
} from "../api/tmdb_api";
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
  const filters = searchParams.get("with_genres");

  const {
    data: movieSearchResult,
    isLoading: movieSearchIsLoading,
    isError: movieSearchIsError,
    error: movieSearchError,
  } = useFetchMovieSearchResults(searchQuery, pageNum);

  const {
    data: discoverMovies,
    isLoading: discoverMoviesIsLoading,
    isError: discoverMoviesIsError,
    error: discoverMoviesError,
  } = useInfiniteFetchDiscoverMovies(filters);

  const {
    data: allGenres,
    isLoading: allGenresLoading,
    isError: allGenresIsError,
    error: allGenresError,
  } = useFetchAllGenres();

  if (discoverMoviesIsLoading || movieSearchIsLoading || allGenresLoading)
    return <LoadingComponent />;
  if (discoverMoviesIsError || allGenresIsError)
    return (
      <ErrorComponent error={`${discoverMoviesError ?? allGenresError}`} />
    );

  if (searchQuery) {
    if (movieSearchIsError) {
      return <ErrorComponent error={`${movieSearchError}`} />;
    }
    if (movieSearchResult && movieSearchResult.results.length !== 0) {
      const results = movieSearchResult.results;
      return (
        <MovieSearchResults
          allGenres={allGenres!}
          movies={results}
          inputQuery={searchQuery}
          totalPages={movieSearchResult.total_pages}
        />
      );
    } else {
      return <MovieNotFound />;
    }
  } else {
    const pages = discoverMovies!.pages;
    return (
      <div>
        {pages.map((page) => {
          return (
            <DiscoverMovies
              key={page.page}
              movies={page.results}
              allGenres={allGenres!}
            />
          );
        })}
      </div>
    );
  }
}
