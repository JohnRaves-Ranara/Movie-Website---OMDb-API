import { Skeleton } from "@/components/ui/skeleton";

type MovieCardSkeletonProps = {
  numberOfCards: number;
};

export default function MovieCardsSkeleton({
  numberOfCards,
}: MovieCardSkeletonProps) {
  return (
    <section className={`${numberOfCards === 8 ? "pb-24" : "pb-4"} space-y-6`}>
      {numberOfCards === 8 && (
        <div className="flex justify-between">
          <Skeleton className="h-10 w-[45vw] lg:w-[450px] bg-gray-500/25"></Skeleton>
          <Skeleton className="h-10 w-[30vw] mobile-l:w-[130px] rounded-full bg-gray-500/25"></Skeleton>
        </div>
      )}
      <div
        className={`grid grid-cols-2 md:grid-cols-4 lg:gap-x-8 xl:gap-x-16 gap-y-4 auto-rows-auto gap-x-2 w-full`}
      >
        {Array.from({ length: numberOfCards }).map((skeleton, index) => {
          return (
            <div key={index} className="w-full">
              <Skeleton className="bg-gray-500/25 w-full h-[60vw] md:h-[33vw] lg:h-[30vw] "></Skeleton>
              <div className="mt-5 flex flex-col gap-2 items-center">
                <Skeleton className="w-full h-3 bg-gray-500/25"></Skeleton>
                <Skeleton className="w-[80%] h-3 bg-gray-500/25"></Skeleton>
                <Skeleton className="w-[30%] h-3 bg-gray-500/25"></Skeleton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
