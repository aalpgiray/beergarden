import { useState } from "react";
import { Beer } from "../../../types";

const getFavoriteBeers = (): Beer[] => {
  const favoriteBeers = localStorage.getItem("favoriteBeers");
  if (favoriteBeers) {
    return JSON.parse(favoriteBeers);
  }
  return [];
};

const useFavoriteBeer = () => {
  const [favoriteBeers, setFavoriteBeers] = useState<Beer[]>(
    getFavoriteBeers()
  );
  const addFavoriteBeer = (beer: Beer) => {
    const favoriteBeers = getFavoriteBeers();
    const newFavoriteBeers = [...favoriteBeers, beer];
    setFavoriteBeers(newFavoriteBeers);
    localStorage.setItem("favoriteBeers", JSON.stringify(newFavoriteBeers));
  };

  const removeFavoriteBeer = (beer: Beer) => {
    const favoriteBeers = getFavoriteBeers();
    const newFavoriteBeers = favoriteBeers.filter(
      (favoriteBeer: Beer) => favoriteBeer.id !== beer.id
    );
    setFavoriteBeers(newFavoriteBeers);
    localStorage.setItem("favoriteBeers", JSON.stringify(newFavoriteBeers));
  };

  const isFavoriteBeer = (beer: Beer) => {
    const favoriteBeers = getFavoriteBeers();
    return favoriteBeers.some(
      (favoriteBeer: Beer) => favoriteBeer.id === beer.id
    );
  };

  const removeAllFavoriteBeers = () => {
    setFavoriteBeers([]);
    localStorage.setItem("favoriteBeers", JSON.stringify([]));
  };

  return {
    addFavoriteBeer,
    removeFavoriteBeer,
    isFavoriteBeer,
    removeAllFavoriteBeers,
    favoriteBeers,
  };
};

export { useFavoriteBeer };
