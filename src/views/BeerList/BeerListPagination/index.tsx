import { Pagination } from "@mui/material";
import { useCallback } from "react";

interface BeerListPaginationProps {
  page: number;
  count: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const BeerListPagination = ({
  page,
  setPage,
  count,
}: BeerListPaginationProps) => {
  const handlePagination = useCallback<
    (event: React.ChangeEvent<unknown>, page: number) => void
  >((_, page) => setPage(page), [setPage]);

  return (
    <Pagination
      siblingCount={1}
      boundaryCount={0}
      count={count}
      page={page}
      onChange={handlePagination}
      shape="rounded"
    />
  );
};

export { BeerListPagination };
