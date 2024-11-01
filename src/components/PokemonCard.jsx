import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { memo, useState } from 'react';

const PokemonCard = memo(({ pokemon }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <div
      className='w-52 h-60 flex items-start justify-center border border-zinc-900 relative hover:scale-105 transition-all duration-300 cursor-pointer bg-zinc-100'
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <div className='border border-zinc-400 w-4/5 h-2/3 flex justify-center items-center mt-5 bg-zinc-300'>
        {isImageLoading && (
          <div className='font-galmuri7 text-zinc-400'>Loading...</div>
        )}
        <img
          onLoad={() => setIsImageLoading(false)}
          src={pokemon.frontImage}
          alt={pokemon.name}
          className={isImageLoading ? 'hidden' : 'block'}
        />
      </div>
      <div className='absolute bottom-4 right-4 text-zinc-900 font-dungGeunMo'>
        {pokemon.name}
      </div>
      <FavoriteButton id={pokemon.id} />
    </div>
  );
});

export default PokemonCard;
