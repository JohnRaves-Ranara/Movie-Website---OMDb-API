import { useFetchMovieDetails } from "@/app/api/omdb_api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function MovieDetails({
  params,
}: {
  params: { movieID: number };
}) {


    return (
        <div></div>
    )
  
  
}
