"use client";
import { useFetchMovieDetails } from "@/app/api/tmdb_api";
import MovieBackdrop from "./MovieBackdrop";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import MoviePoster from "@/app/components/MoviePoster";
import Info from "./Info";
import MovieDetailsSkeleton from "@/app/components/skeletons/MovieDetailsSkeleton";
import ErrorComponent from "@/app/components/ErrorComponent";

type MovieDetailsProps = {
  movieID: number;
};

//@ts-ignore
const imdbIcon: IconProp = "fa-brands fa-imdb";

export default function MovieDetails({ movieID }: MovieDetailsProps) {
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useFetchMovieDetails(movieID);

  if (isLoading) {
    return <MovieDetailsSkeleton />;
  }
  if (isError) {
    return (
      <div className="grid min-h-screen text-white place-items-center bg-gray-950">
        <ErrorComponent error={`${error}`}/>
      </div>
    );
  }
  if (movie) {
    return (
      <main className="relative grid h-screen bg-gray-950 place-items-center">
        <MovieBackdrop backdrop={movie.backdrop_path}/>
        <div className="absolute z-10 size-full overflow-auto bg-black/60 px-[8vw] py-12 grid place-items-center">
          <section className="flex flex-col items-center justify-center gap-12 lg:flex-row">
            <MoviePoster movie={movie} isMovieDetailsPage={true}/>
            <Info movie={movie}/>
          </section>
        </div>
      </main>
    );
  }
}
