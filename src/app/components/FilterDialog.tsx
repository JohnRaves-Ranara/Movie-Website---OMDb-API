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

type FilterDialogProps = {
    allGenres : Genre[]
}

export default function FilterDialog({allGenres} : FilterDialogProps ) {

  return (
    <Dialog>
      <DialogTrigger>
        <div className="px-6 py-2 bg-purple-500 rounded-full flex items-center gap-3 hover:bg-purple-800 group">
          <p className="text-white">Filters</p>
          <IconFilterFilled color="white" size={25} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-gray-950 border-gray-950">
        <DialogHeader>
          <DialogTitle className="text-muted-foreground">Select Filters</DialogTitle>
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
