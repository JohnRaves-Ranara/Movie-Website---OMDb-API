import {MovieDetails } from "@/app/utils/types";

type InfoProps = {
    movie: MovieDetails
}

export default function Info({movie}:InfoProps){
    return (
        <div className="text-white h-content max-w-[50vw]">
            <h1 className="text-4xl mb-4 line-clamp-3 font-semibold">
              {movie.title}
            </h1>
            <h2 className="text-xl font-light mb-4">
              {movie.release_date.split("-")[0]}
            </h2>
            <div className="flex gap-2 mb-6 font-thin">
              <p>{movie.runtime} min</p>
              <p>|</p>
              <div>
                {movie.genres.map((genre, index) => {
                  if (index === movie.genres.length - 1) {
                    return <span key={index} className="pr-1"><em>{genre.name}</em></span>;
                  } else {
                    return <span key={index}><em>{genre.name}, </em></span>;
                  }
                })}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-yellow-400 font-normal">Rating:</span>
              <p className="line-clamp-1 font-light">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
            <p className="text-md font-thin">{movie.overview}</p>
          </div>
    )
}