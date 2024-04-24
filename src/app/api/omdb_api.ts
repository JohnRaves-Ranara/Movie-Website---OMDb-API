import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Movie, MoviesRequest } from "../utils/types";
import axios from "axios";
import { use } from "react";

export function useFetchMovies(
  search: string,
  pageNum: number
): UseQueryResult<MoviesRequest, Error> {
  console.log(`USE FETCH MOVIES SEARCH: ${search} ${pageNum}`);
  const query = useQuery<MoviesRequest, Error>({
    staleTime: 300000,
    queryKey: ["movies", search, pageNum],
    queryFn: async () => {
      if (search && pageNum) {
        console.log("SEARCH IS NOT NULL");
        const { data: searchResultsData } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${search}&page=${pageNum}&api_key=55de493263803a10375dd886602812d9`
        );
        return searchResultsData;
      } else {
        console.error("SEARCH IS NULL/EMPTY");
        const { data: discoverMoviesData } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=55de493263803a10375dd886602812d9`
        );
        return discoverMoviesData;
      }
    },
  });
  return query;
}

export function useFetchMovieDetails(
  movieID: number
): UseQueryResult<Movie, Error> {
  const query = useQuery<Movie, Error>({
    staleTime: 60000 * 100000,
    queryKey: ["movie", movieID],
    queryFn: async () => {
      const { data: movieDetails } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=55de493263803a10375dd886602812d9`
      );
      console.log(`MOVIE DETAILS ${movieDetails}`)
      return movieDetails;
    },
  });
  return query;
}
