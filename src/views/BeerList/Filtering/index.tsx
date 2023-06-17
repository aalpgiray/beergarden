import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FilterIcon from "@mui/icons-material/FilterAlt";
import { Filter } from "../../../types";
import { debounce } from "@mui/material";

interface FilterProps {
  filter: Filter;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const Filtering = ({ filter, setFilter, setPage }: FilterProps) => {
  const [open, setOpen] = React.useState(false);
  const [localFilter, setLocalFilter] = React.useState(filter);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClear = () => {
    setFilter({});
    setOpen(false);
  };

  const handleClose = () => {
    setFilter(localFilter);
    setPage(1);
    setOpen(false);
  };

  const handleFilterChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  >((event) => {
    const { id, value } = event.target;
    setLocalFilter((prev) => ({ ...prev, [id]: value }));
  }, []);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <FilterIcon />
      </Button>
      <Dialog open={open}>
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the fields you want to filter by
          </DialogContentText>
          <TextField
            value={localFilter.by_name}
            onChange={handleFilterChange}
            autoFocus
            margin="dense"
            id="by_name"
            label="Name"
            fullWidth
          />
          <TextField
            value={localFilter.by_city}
            onChange={handleFilterChange}
            autoFocus
            margin="dense"
            id="by_city"
            label="City"
            fullWidth
          />
          <TextField
            value={localFilter.by_dist}
            onChange={handleFilterChange}
            autoFocus
            margin="dense"
            id="by_dist"
            label="Distance"
            placeholder="latitude, longitude"
            fullWidth
          />
          <TextField
            value={localFilter.by_state}
            onChange={handleFilterChange}
            autoFocus
            margin="dense"
            id="by_state"
            label="State"
            fullWidth
          />
          <TextField
            value={localFilter.by_postal}
            onChange={handleFilterChange}
            autoFocus
            margin="dense"
            id="by_postal"
            label="Postal"
            placeholder="5-digit, or 9-digit with underscore"
            fullWidth
          />
          <TextField
            value={localFilter.by_country}
            onChange={handleFilterChange}
            autoFocus
            margin="dense"
            id="by_country"
            label="Country"
            fullWidth
          />
          <TextField
            value={localFilter.by_type}
            onChange={handleFilterChange}
            autoFocus
            margin="dense"
            id="by_type"
            label="Type"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear}>Clear</Button>
          <Button onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { Filtering };
