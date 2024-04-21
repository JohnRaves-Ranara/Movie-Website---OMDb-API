import { useQuery } from "@tanstack/react-query";
import { Movie, MoviesRequest } from "../types";
import axios from "axios";

export function useFetchMovies(search: string, pageNum: number) {
  console.log(`USE FETCH MOVIES SEARCH: ${search}`);
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
        console.error("SEARCH IS NULL/EMPTY")
        const { data: discoverMoviesData } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=55de493263803a10375dd886602812d9`
        );
        return discoverMoviesData;
      }
    },
  });
  return query;
}
