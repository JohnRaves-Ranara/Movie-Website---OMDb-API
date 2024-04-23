"use client";
import { useFetchMovieDetails } from "@/app/api/omdb_api";

export default function MovieDetails({
    params,
  }: {
    params: { movieID: number };
  }) {
//   const {
//     data: movie,
//     isLoading,
//     isError,
//     error,
//   } = useFetchMovieDetails(params.movieID);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen grid place-items-center">LOADING...</div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="min-h-screen grid place-items-center">
//         ERROR {error.toString()}
//       </div>
//     );
//   }

  return (
    (
      <div className="min-h-screen bg-blue-400">
        <p>Movie ID: {params.movieID}</p>
      </div>
    )
  );
}
