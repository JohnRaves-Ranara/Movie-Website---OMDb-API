import {
  InfiniteData,
  UseInfiniteQueryResult,
  UseQueryResult,
  useInfiniteQuery,
  useQueries,
  useQuery,
} from "@tanstack/react-query";
import { Genre, Movie, MovieDetails, MoviesRequest } from "../utils/types";
import axios from "axios";
import { use } from "react";

export function useFetchMovieDetails(
  movieID: number
): UseQueryResult<MovieDetails, Error> {
  const query = useQuery<MovieDetails, Error>({
    staleTime: Infinity,
    queryKey: ["movie", movieID],
    queryFn: async () => {
      const { data: movieDetails } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=55de493263803a10375dd886602812d9`
      );
      console.log(`MOVIE DETAILS ${movieDetails}`);
      return movieDetails;
    },
  });
  return query;
}

export function useFetchAllGenres() {
  const query = useQuery<Genre[], Error>({
    staleTime: Infinity,
    queryKey: ["genres"],
    queryFn: async () => {
      const { data: genres } = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=55de493263803a10375dd886602812d9"
      );
      return genres.genres;
    },
  });
  return query;
}

export function useInfiniteFetchDiscoverMovies(
  filters: string | null
): UseInfiniteQueryResult<InfiniteData<MoviesRequest, unknown>, Error> {
  const query = useInfiniteQuery({
    queryKey: ["discovermovies", filters],
    queryFn: async (): Promise<MoviesRequest> => {
      if (filters) {
        const { data: discoverMoviesDataWithFilters } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${filters}&api_key=55de493263803a10375dd886602812d9`
        );
        return discoverMoviesDataWithFilters;
      } else {
        const { data: discoverMoviesData } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=55de493263803a10375dd886602812d9`
        );
        return discoverMoviesData;
      }
    },
    initialPageParam: 1,
    getNextPageParam: (page) =>
      page.page === page.total_pages ? undefined : page.page + 1,
  });
  return query;
}

export function useFetchMovieSearchResults(
  search: string | null,
  pageNum: string | null
): UseQueryResult<MoviesRequest, Error> {
  const query = useQuery({
    staleTime: Infinity,
    queryKey: ["searchresults", search, pageNum],
    queryFn: async () => {
      if (search) {
        const { data: searchResultsData } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${search}&page=${pageNum}&api_key=55de493263803a10375dd886602812d9`
        );
        return searchResultsData;
      }
    },
  });
  return query;
}
