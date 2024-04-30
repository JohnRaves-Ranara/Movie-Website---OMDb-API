import { Skeleton } from "@/components/ui/skeleton";

type MovieCardSkeletonProps ={
  numberOfCards : number
}

export default function MovieCardsSkeleton({numberOfCards} : MovieCardSkeletonProps) {
  return (
    <div className="grid grid-cols-4 gap-16 w-full bg-gray-950 px-24 pb-24">
      {Array.from({ length: numberOfCards}).map((skeleton) => {
        return (
          <div className="flex flex-col w-[300px] text-white">
            <Skeleton className="h-[400px] w-full bg-gray-500/25"></Skeleton>
            <div className="mt-5 flex flex-col gap-2 items-center">
              <Skeleton className="w-full h-3 bg-gray-500/25"></Skeleton>
              <Skeleton className="w-[80%] h-3 bg-gray-500/25"></Skeleton>
              <Skeleton className="w-[30%] h-3 bg-gray-500/25"></Skeleton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
