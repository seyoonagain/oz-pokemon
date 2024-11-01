import { useSelector } from 'react-redux';
import { selectPokemonById } from '../RTK/selector';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import FlipCard from '../components/FlipCard';

export default function Detail() {
  const { id } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(id)));
  return (
    <section className='flex flex-col bg-zinc-200 text-zinc-900 items-center my-10 border border-zinc-200 rounded-md w-96 h-[500px] p-3 relative'>
      <h1 className='text-3xl font-dungGeunMo'>{pokemon.name}</h1>
      <pre className='font-sans text-center my-5 font-galmuri14'>
        {pokemon.description}
      </pre>
      <FlipCard frontImage={pokemon.frontImage} backImage={pokemon.backImage} />
      <FavoriteButton id={id} />
    </section>
  );
}
