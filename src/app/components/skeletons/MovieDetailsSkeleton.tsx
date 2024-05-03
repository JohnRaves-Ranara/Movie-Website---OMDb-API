import { Skeleton } from "@/components/ui/skeleton";

export default function MovieDetailsSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-10 bg-gray-950 px-[8vw] py-12">
      <Skeleton className="w-[50vw] h-[60vw] max-w-[300px] lg:h-[40vw] max-h-[400px] bg-gray-500/25"></Skeleton>
      <div className="flex flex-col w-full gap-4 lg:max-w-[50vw]">
        <Skeleton className="w-[45vw] self-center lg:self-start h-8 bg-gray-500/25 max-w-[250px]"></Skeleton>
        <Skeleton className="w-[20vw] h-4 md:h-6 bg-gray-500/25 self-center lg:self-start"></Skeleton>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Skeleton className="w-[30%] h-4 md:h-6 bg-gray-500/25"></Skeleton>
          <Skeleton className="w-[50%] h-4 md:h-6 bg-gray-500/25"></Skeleton>
        </div>
        <Skeleton className="w-[15vw] h-4 md:h-6 bg-gray-500/25"></Skeleton>
        <Skeleton className="w-full h-[15vh] bg-gray-500/25"></Skeleton>
      </div>
    </div>
  );
}
