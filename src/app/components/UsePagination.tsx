import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type UsePaginationProps = {
  totalPages: number;
};

export default function UsePagination({ totalPages }: UsePaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const router = useRouter();

  function handlePageChange(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  }

  const { items } = usePagination({
    onChange: (e, page) => {
      handlePageChange(page);
    },
    count: totalPages,
    page: currentPage,
  });

  return (
    <nav className="mt-24">
      <ul className="flex items-center justify-center space-x-1 text-white mobile-l:space-x-2 md:space-x-3">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                className={`flex items-center justify-center text-2xs mobile-l:text-sm sm:text-base lg:text-lg size-[9.5vw] md:size-[6vw] xl:size-[4vw] border-white border-2 border-solid  rounded-[100%] hover:bg-white hover:text-black transition-all ${
                  selected && "bg-purple-500 border-none"
                }`}
                type="button"
                {...item}
              >
                {page}
              </button>
            );
          } else {
            if (type === "previous" && currentPage === 1) {
              children = null;
            } else if (type === "next" && currentPage === totalPages) {
              children = null;
            } else {
              children = (
                <button
                  className={`flex items-center justify-center size-[9.5vw] md:size-[6vw] xl:size-[4vw] border-white border-2 border-solid rounded-[100%] hover:bg-white hover:text-black transition-all`}
                  type="button"
                  {...item}
                >
                  {type === "previous" ? (
                    <IconChevronLeft className="h-[5vw] mobile-l:h-[4vw] md:h-[2.5vw] max-h-6"></IconChevronLeft>
                  ) : (
                    <IconChevronRight className="h-[5vw] mobile-l:h-[4vw] md:h-[2.5vw] max-h-6 "></IconChevronRight>
                  )}
                </button>
              );
            }
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}
