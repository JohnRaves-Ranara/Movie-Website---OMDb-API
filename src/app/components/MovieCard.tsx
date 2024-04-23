import MoviePoster from "./MoviePoster";
import { Movie } from "../types";

type MovieCardProps = {
    movie : Movie
}

export default function MovieCard({movie} : MovieCardProps) {
    return (
        <>
            <MoviePoster poster={movie.poster_path} vote_avg={movie.vote_average}/>
            <div className="text-center">
                <p className="line-clamp-2">{movie.title}</p>
                <p>{movie.release_date.split("-")[0]}</p>
            </div>
        </>
    )
}