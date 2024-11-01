import { getRegExp } from 'korean-regexp';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectPokemonByRegexp } from '../RTK/selector';
import PokemonCard from '../components/PokemonCard';

export default function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('pokemon');
  const regexp = getRegExp(keyword);
  const pokemonData = useSelector(selectPokemonByRegexp(regexp));
  return (
    <section className='flex flex-wrap gap-5 justify-center'>
      {pokemonData &&
        pokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
    </section>
  );
}
