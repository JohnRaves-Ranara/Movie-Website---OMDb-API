import { useQuery } from "@tanstack/react-query";
import { Movie } from "../components/Dashboard";
import axios from "axios";

export function useFetchMovies(search: string) {
  const query = useQuery<Movie[], Error>({
    staleTime: 300000,
    queryKey: ["movies", search],
    queryFn: async () => {
      console.log("fetching");
      if (!search) {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=55de493263803a10375dd886602812d9`
        );
        return data.results;
      } else {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=55de493263803a10375dd886602812d9`
        );
        return data.results;
      }
    },
  });
  return query;
}
