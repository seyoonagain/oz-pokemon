import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemonDataById } from './thunk';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    loading: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonDataById.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchPokemonDataById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});
