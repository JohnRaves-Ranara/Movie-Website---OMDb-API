import { useQuery } from "@tanstack/react-query";
import { Movie } from "../components/Dashboard";
import axios from "axios";

export function useFetchMovies(search : string){
    const query = useQuery<Movie[], Error>({
        staleTime: 300000,
        queryKey: ["movies", search],
        queryFn: async () => {
          console.log('fetching')
          const { data } = await axios.get(
            `http://www.omdbapi.com/?apikey=8e46c852&s=${search}`
          );
          return data.Search;
        },
      });
    return query
} 