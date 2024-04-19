import { Dispatch, SetStateAction } from "react";
import { useFetchMovies } from "../api/omdb_api";
import DiscoverMovies from "./DiscoverMovies";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import MovieNotFound from "./MovieNotFound";
import MovieSearchResults from "./MovieSearchResults";

type MoviesProps = {
  search: string;
};

export default function Movies({ search }: MoviesProps) {
  //fetch data
  const { data: movies, isLoading, isError, error } = useFetchMovies(search);

  if (isLoading) return <LoadingComponent />;

  if (isError) return <ErrorComponent error={error} />;

  return (
    <>
      {movies && movies.length !== 0 ? (
        search ? (
          <MovieSearchResults movies={movies} />
        ) : (
          <DiscoverMovies movies={movies} />
        )
      ) : (
        <MovieNotFound />
      )}
    </>
  );
}
