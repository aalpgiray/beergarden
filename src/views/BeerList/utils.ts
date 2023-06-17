import { useEffect, useState } from "react";
import { getBeerList } from "../../api";
import { Beer, Filter, SORT } from "../../types";
import handle from "../../utils/error";

const useBeerListData = () => {
  const [filter, setFilter] = useState<Filter>({});
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SORT>("asc");

  useEffect(() => {
    (async () => {
      try {
        const response = await getBeerList({
          page,
          sort,
          per_page: 10,
          ...filter,
        });
        setBeerList(response.data);
      } catch (error) {
        handle(error);
      }
    })();
  }, [filter, page, sort]);

  return { beerList, page, sort, filter, setFilter, setSort, setPage };
};

export { useBeerListData };
