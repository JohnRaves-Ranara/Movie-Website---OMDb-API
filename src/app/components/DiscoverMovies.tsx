import MovieCard from "./MovieCard";
import { Genre, Movie } from "../utils/types";
import { IconFilterFilled } from "@tabler/icons-react";
import FilterDialog from "./FilterDialog";
import { useFilterDialogContext } from "../contexts/FilterDialogContext";
import { useSearchParams } from "next/navigation";

type DiscoverMoviesProps = {
  movies: Movie[];
  allGenres: Genre[];
};

export default function DiscoverMovies({
  movies,
  allGenres,
}: DiscoverMoviesProps) {

  const {isOpen, setIsOpen} = useFilterDialogContext()
  const searchParams = useSearchParams()
  const filters = searchParams.get("with_genres")
  
  return (
    <div className="min-h-screen bg-gray-950 pt-[18vh] px-24 pb-24">
      <FilterDialog allGenres={allGenres}></FilterDialog>
      <div className="flex gap-8 items-center mb-8">
        <h1 className="text-white text-[2.5vw] overflow-hidden before:block before:h-8 before:w-[0.45rem] before:bg-purple-500 flex items-center gap-4">
          {filters ? "Showing filter results": "Discover Movies"}
        </h1>
        <button onClick={()=>setIsOpen(true)} type="button" className="px-6 py-2 bg-purple-500 rounded-full flex items-center gap-3 hover:bg-purple-800 group">
          <p className="text-white">Filters</p>
          <IconFilterFilled color="white" size={25} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-16 text-white">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="overflow-hidden">
              <MovieCard movie={movie} allGenres={allGenres}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
