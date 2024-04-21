import * as React from "react";
import usePagination, { UsePaginationResult } from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";


type UsePaginationProps = {
    totalPages : number
}

export default function UsePagination({totalPages} : UsePaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const router = useRouter();
  
  function handlePageChange (pageNumber: number | string) {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const { items } = usePagination({
    onChange: (e, page)=> {
        handlePageChange(page)
    },
    count: totalPages,
    page: currentPage,
  });

  return (
    <nav className="mt-24">
      <ul className="space-x-4 text-white flex justify-center items-center">
        {items.map(({ page, type, selected, ...item}, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                className={`size-[3em] border-white border-2 border-solid  rounded-[100%] hover:bg-white hover:text-black transition-all ${
                  selected && "bg-purple-500 border-purple-500"
                }`}
                type="button"
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                className={`size-[3em] border-white border-2 border-solid  rounded-[100%] hover:bg-white hover:text-black transition-all flex justify-center items-center`}
                type="button"
                {...item}
              >
                {type === "previous" ? (
                  <IconChevronLeft></IconChevronLeft>
                ) : (
                  <IconChevronRight></IconChevronRight>
                )}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}
