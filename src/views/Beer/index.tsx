import { useEffect, useState } from "react";
import { Beer as IBeer } from "../../types";
import { fetchData } from "./utils";
import { useParams } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { useFavoriteBeer } from "../Home/FavoriteBeers/useFavoriteBeer";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();
  const { isFavoriteBeer, addFavoriteBeer, removeFavoriteBeer } =
    useFavoriteBeer();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  console.log(beer);

  const handleFavorite = () => {
    if (beer) {
      if (isFavoriteBeer(beer)) {
        removeFavoriteBeer(beer);
      } else {
        addFavoriteBeer(beer);
      }
    }
  };

  return (
    <article>
      <section>
        <header>
          <h1>
            <Stack direction="row" spacing={2}>
              <span onClick={handleFavorite}>
                {beer && isFavoriteBeer(beer) ? (
                  <Favorite />
                ) : (
                  <FavoriteBorder />
                )}
              </span>
              <span>{beer?.name}</span>
            </Stack>{" "}
          </h1>
        </header>
        <main>
          <Stack spacing={2}>
            <span>
              <b>Type: </b> {beer?.brewery_type}
            </span>
            <span>
              <b>City: </b> {beer?.city}
            </span>
            <span>
              <b>State: </b> {beer?.state}
            </span>
            <span>
              <b>Country: </b> {beer?.country}
            </span>
            <span>
              <b>Postal: </b> {beer?.postal_code}
            </span>
            <span>
              <b>Address: </b> {beer?.street}
            </span>
            <span>
              <b>Phone: </b> {beer?.phone}
            </span>
            <span>
              <b>Website: </b> {beer?.website_url}
            </span>
          </Stack>
        </main>
      </section>
    </article>
  );
};

export default Beer;
