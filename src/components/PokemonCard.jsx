import { useNavigate } from 'react-router-dom';

export default function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  return (
    <div
      className='w-52 h-60 flex items-start justify-center border border-zinc-900 relative hover:scale-105 transition-all duration-300 cursor-pointer bg-zinc-100'
      onClick={() => navigate(`detail/${pokemon.id}`)}
    >
      <div className='border border-zinc-400 w-4/5 h-2/3 flex justify-center items-center mt-5 bg-zinc-300'>
        <img src={pokemon.frontImage} alt={pokemon.name} />
      </div>
      <p className='absolute bottom-4 right-4 text-zinc-900 font-dungGeunMo'>
        {pokemon.name}
      </p>
    </div>
  );
}
