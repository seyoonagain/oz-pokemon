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
