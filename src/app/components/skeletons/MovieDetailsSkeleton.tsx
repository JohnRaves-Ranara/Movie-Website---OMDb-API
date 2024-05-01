import { Skeleton } from "@/components/ui/skeleton";

export default function MovieDetailsSkeleton() {
  return (
    <div className="bg-gray-950 min-h-screen flex justify-center items-center gap-12">
      <Skeleton className="h-[400px] w-[300px] bg-gray-500/25"></Skeleton>
      <div className="flex flex-col gap-8">
        <Skeleton className="w-[30vw] h-8 bg-gray-500/25"></Skeleton>
        <Skeleton className="w-[15vw] h-8 bg-gray-500/25"></Skeleton>
        <Skeleton className="w-[45vw] h-36 bg-gray-500/25"></Skeleton>
      </div>
    </div>
  );
}
