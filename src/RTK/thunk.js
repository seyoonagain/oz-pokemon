import { createAsyncThunk } from '@reduxjs/toolkit';
import PokemonClient from '../api/pokemonApi';

export const fetchPokemonDataById = createAsyncThunk(
  'pokemon/fetchPokemonDataById',
  async (maxId) => {
    const pokemon = new PokemonClient();
    const pokemonId = Array(maxId)
      .fill(0)
      .map((_, index) => index + 1);
    const pokemonData = await Promise.all(
      pokemonId.map((id) => pokemon.getPokemonInfo(id))
    );
    return pokemonData;
  }
);
