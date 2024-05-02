"use client";
import React, { useEffect } from "react";
import {
  useFetchAllGenres,
  useInfiniteFetchDiscoverMovies,
  useFetchMovieSearchResults,
} from "../api/tmdb_api";
import DiscoverMovies from "./DiscoverMovies";
import ErrorComponent from "./ErrorComponent";
import MovieNotFound from "./MovieNotFound";
import MovieSearchResults from "./MovieSearchResults";
import { useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import MovieCardsSkeleton from "./skeletons/MovieCardsSkeleton";

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
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteFetchDiscoverMovies(filters);

  const {
    data: allGenres,
    isLoading: allGenresLoading,
    isError: allGenresIsError,
    error: allGenresError,
  } = useFetchAllGenres();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (discoverMoviesIsLoading || movieSearchIsLoading || allGenresLoading)
    return <MovieCardsSkeleton numberOfCards={8} />;
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
        {pages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              {index === 0 ? (
                <DiscoverMovies
                  key={page.page}
                  totalResults={page.total_results}
                  isFirstPage={true}
                  movies={page.results}
                  allGenres={allGenres!}
                />
              ) : (
                <DiscoverMovies
                  key={page.page}
                  totalResults={page.total_results}
                  isFirstPage={false}
                  movies={page.results}
                  allGenres={allGenres!}
                />
              )}
            </React.Fragment>
          );
        })}
        <div ref={ref} className="bg-gray-950">
          {isFetchingNextPage ? (
            <MovieCardsSkeleton numberOfCards={4}/>
          ) : (
            <div className="w-full px-24 py-24 text-white text-xl flex items-center justify-center">
              End of results
            </div>
          )}
        </div>
      </div>
    );
  }
}
