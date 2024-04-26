import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconFilterFilled } from "@tabler/icons-react";
import { Genre } from "../utils/types";
import GenreFilter from "./GenreFilter";
import { useFilterDialogContext } from "../contexts/FilterDialogContext";

type FilterDialogProps = {
    allGenres : Genre[]
}

export default function FilterDialog({allGenres} : FilterDialogProps ) {
  const {isOpen, setIsOpen} = useFilterDialogContext()

  return (
    <Dialog open={isOpen} onOpenChange={()=> setIsOpen(!isOpen)}>
      <DialogContent className="bg-gray-950 border-gray-950">
        <DialogHeader>
          <DialogTitle className="text-white">Select Filters</DialogTitle>
          <div className="flex flex-wrap justify-center items-center py-8 space-x-4">
            {allGenres.map((genre) => {
                return (
                    <GenreFilter genre={genre}></GenreFilter>
                )
            })}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
