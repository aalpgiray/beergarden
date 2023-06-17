import { useEffect, useState } from "react";
import { fetchData } from "./utils";
import { Beer } from "../../types";
import { Link as RouterLink } from "react-router-dom";
import { Button, Checkbox, Paper, TextField, Link, Stack } from "@mui/material";
import styles from "./Home.module.css";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useFavoriteBeer } from "./FavoriteBeers/useFavoriteBeer";

const Home = () => {
  const {
    favoriteBeers,
    addFavoriteBeer,
    removeFavoriteBeer,
    isFavoriteBeer,
    removeAllFavoriteBeers,
  } = useFavoriteBeer();
  const [beerList, setBeerList] = useState<Array<Beer>>([]);

  const [seed, setSeed] = useState<number>(Math.random());

  const handleReload = () => {
    setSeed(Math.random());
  };

  useEffect(() => fetchData(setBeerList), [seed]);

  return (
    <article>
      <section>
        <main>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <TextField label="Filter..." variant="outlined" />
                <Button variant="contained" onClick={handleReload}>
                  Reload list
                </Button>
              </div>
              <ul className={styles.list}>
                {beerList.map((beer, index) => (
                  <li key={index.toString()}>
                    <Checkbox
                      checked={isFavoriteBeer(beer)}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={(_, checked) => {
                        if (checked) {
                          addFavoriteBeer(beer);
                        } else {
                          removeFavoriteBeer(beer);
                        }
                      }}
                    />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Paper>

          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3>Saved items</h3>
                <Button
                  onClick={removeAllFavoriteBeers}
                  variant="contained"
                  size="small"
                >
                  Remove all items
                </Button>
              </div>
              <Stack spacing={2}>
                {favoriteBeers.map((beer, index) => (
                  <span key={index.toString()}>
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </span>
                ))}
                {!favoriteBeers.length && <p>No saved items</p>}
              </Stack>
            </div>
          </Paper>
        </main>
      </section>
    </article>
  );
};

export default Home;
