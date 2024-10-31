import { useSelector } from 'react-redux';
import PokemonCard from '../components/PokemonCard';

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data);

  return (
    <section className='flex flex-wrap gap-5 justify-center'>
      {pokemonData &&
        pokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
    </section>
  );
}
