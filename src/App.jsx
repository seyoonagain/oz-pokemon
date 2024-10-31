import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchPokemonDataById } from './RTK/thunk';

const MAX_ID = 151;

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.data);
  useEffect(() => {
    dispatch(fetchPokemonDataById(MAX_ID));
  }, [dispatch]);
  console.log(pokemonData);
  return <></>;
}

export default App;
