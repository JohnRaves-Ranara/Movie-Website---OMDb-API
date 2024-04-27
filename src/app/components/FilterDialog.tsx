import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Genre } from "../utils/types";
import GenreFilter from "./GenreFilter";
import { useFilterDialogContext } from "../contexts/FilterDialogContext";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type FilterDialogProps = {
  allGenres: Genre[];
};

export default function FilterDialog({ allGenres }: FilterDialogProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [filters, setFilters] = useState<any[]>([]);
  const { isOpen, setIsOpen } = useFilterDialogContext();

  //get `with_genres` urlparams (if any) and convert to number array
  const URLParamsFiltersArray = params
    .get("with_genres")
    ?.split(",")
    .map((filter) => Number(filter));

  useEffect(() => {
    console.log("use effect ran");
    //if with_genres params exists, set filters to that
    if (URLParamsFiltersArray) {
      setFilters(URLParamsFiltersArray);
    }
  }, []);

  const handleSelectGenre = (genreID: number) => {
    //remove selected filter in filters if it exists, otherwise add
    if (filters.includes(genreID)) {
      setFilters(filters.filter((filter) => filter !== genreID));
    } else {
      setFilters([...filters, genreID]);
    }
    console.log(filters);
  };

  function checkArrayInequality(
    URLParamsFiltersArray: number[] | undefined,
    filters: number[]
  ) {
    if (URLParamsFiltersArray) {
      if (URLParamsFiltersArray!.length !== filters.length) return true;
      URLParamsFiltersArray!.sort();
      filters.sort();
      for (let i = 0; i < URLParamsFiltersArray!.length; i++) {
        if (URLParamsFiltersArray![i] !== filters[i]) return true;
      }
      return false;
    } else {
      return true;
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="bg-gray-950 border-gray-950">
        <DialogHeader>
          <DialogTitle className="text-muted-foreground">Select Filters</DialogTitle>
          <div className="flex flex-wrap justify-center items-center py-8 space-x-4">
            {allGenres.map((genre) => {
              return (
                <GenreFilter
                  key={genre.id}
                  isGenreSelected={filters.includes(genre.id)}
                  genre={genre}
                  handleSelectGenre={() => handleSelectGenre(genre.id)}
                ></GenreFilter>
              );
            })}
          </div>
        </DialogHeader>
        <DialogFooter>
          <button
            onClick={() => {
              try {
                if (
                  filters.length !== 0 &&
                  checkArrayInequality(URLParamsFiltersArray, filters)
                ) {
                  params.set("with_genres", filters.join(","));
                } else {
                  params.delete("with_genres");
                }
              } catch (e) {
                throw new Error(`${e}`);
              } finally {
                router.replace(`${pathname}?${params.toString()}`);
                setIsOpen(false);
              }
            }}
            className="bg-purple-500 py-2 px-4 text-white rounded-full"
          >
            Confirm
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
