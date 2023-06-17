import { SORT } from "../../../types";
import { KeyboardArrowDown } from "@mui/icons-material";
import { KeyboardArrowUp } from "@mui/icons-material";

import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Tooltip } from "@mui/material";

interface SortingProps {
  sort: SORT;
  setSort: React.Dispatch<React.SetStateAction<SORT>>;
}

const Sorting = ({ sort, setSort }: SortingProps) => {
  const handleSort = React.useCallback<
    (event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void
  >(
    (_, value) => {
      setSort(value ?? sort);
    },
    [setSort, sort]
  );

  return (
    <Tooltip title="Sorting">
      <ToggleButtonGroup
        size="small"
        value={sort}
        exclusive
        onChange={handleSort}
        aria-label="Sorting"
      >
        <ToggleButton value="asc" aria-label="ascending">
          <KeyboardArrowUp />
        </ToggleButton>
        <ToggleButton value="desc" aria-label="descending">
          <KeyboardArrowDown />
        </ToggleButton>
      </ToggleButtonGroup>
    </Tooltip>
  );
};

export { Sorting };
