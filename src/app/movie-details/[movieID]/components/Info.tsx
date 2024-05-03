import {MovieDetails } from "@/app/utils/types";

type InfoProps = {
    movie: MovieDetails
}

export default function Info({movie}:InfoProps){
    return (
        <div className="text-white h-content text-sm sm:text-base lg:max-w-[50vw]">
            <h1 className="mb-4 text-xl font-semibold text-center lg:text-start sm:text-2xl line-clamp-3">
              {movie.title}
            </h1>
            <h2 className="mb-4 font-light text-center lg:text-start">
              {movie.release_date.split("-")[0]}
            </h2>
            <div className="flex flex-col gap-2 mb-6 font-thin lg:flex-row">
              <p>{movie.runtime} min</p>
              <p className="hidden lg:block">|</p>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre, index) => {
                  if (index === movie.genres.length - 1) {
                    return <span key={index} className="pr-1"><em>{genre.name}</em></span>;
                  } else {
                    return <span key={index}><em>{genre.name},</em></span>;
                  }
                })}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-normal text-yellow-400">Rating:</span>
              <p className="font-light line-clamp-1">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
            <p className="font-thin">{movie.overview}</p>
          </div>
    )
}