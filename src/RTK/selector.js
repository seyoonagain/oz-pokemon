import { createSelector } from '@reduxjs/toolkit';

export const selectPokemonById = (id) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemonData) => pokemonData.find((pokemon) => pokemon.id === id)
  );

export const selectPokemonByRegexp = (regexp) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemonData) => pokemonData.filter((pokemon) => pokemon.name.match(regexp))
  );

export const isInFavoriteList = (id) =>
  createSelector(
    (state) => state.favorite,
    (pokemonData) => pokemonData.includes(id)
  );

export const selectFavorite = () =>
  createSelector(
    (state) => state.pokemon.data,
    (state) => state.favorite,
    (pokemonData, favoriteId) =>
      pokemonData.filter((pokemon) => favoriteId.includes(pokemon.id))
  );
