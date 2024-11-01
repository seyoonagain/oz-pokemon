import { useSelector } from 'react-redux';
import { selectFavorite } from '../RTK/selector';
import PokemonCard from '../components/PokemonCard';

export default function Favorites() {
  const pokemonData = useSelector(selectFavorite());
  return (
    <section className='flex flex-wrap gap-5 justify-center'>
      {pokemonData &&
        pokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
    </section>
  );
}
