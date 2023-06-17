import { useBeerListData } from "./utils";
import {
  Avatar,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import SportsBar from "@mui/icons-material/SportsBar";
import { useNavigate } from "react-router-dom";
import { Sorting } from "./Sorting";
import { BeerListPagination } from "./BeerListPagination";
import { Filtering } from "./Filtering";
const BeerList = () => {
  const navigate = useNavigate();
  const { beerList, page, sort, filter, setPage, setSort, setFilter } =
    useBeerListData();

  const onBeerClick = (id: string) => navigate(`/beer/${id}`);

  return (
    <article>
      <section>
        <header>
          <h1>BeerList page</h1>
          <section>
            <Stack
              spacing={2}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="flex-end"
            >
              <Filtering
                setPage={setPage}
                setFilter={setFilter}
                filter={filter}
              />
              <Sorting sort={sort} setSort={setSort} />
            </Stack>
          </section>
        </header>
        <main>
          <List>
            {beerList.map((beer) => (
              <ListItemButton
                key={beer.id}
                onClick={onBeerClick.bind(this, beer.id)}
              >
                <ListItemAvatar>
                  <Avatar>
                    <SportsBar />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={beer.name}
                  secondary={beer.brewery_type}
                />
              </ListItemButton>
            ))}
          </List>
        </main>
        <footer>
          <BeerListPagination
            count={beerList.length === 10 ? Number.MAX_SAFE_INTEGER : page}
            page={page}
            setPage={setPage}
          />
        </footer>
      </section>
    </article>
  );
};

export default BeerList;
