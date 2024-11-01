import { useDispatch, useSelector } from 'react-redux';
import { isInFavoriteList } from '../RTK/selector';
import { favoriteSlice } from '../RTK/slice';
import EmptyHeart from '../assets/empty.svg?react';
import FilledHeart from '../assets/filled.svg?react';

export default function FavoriteButton({ id }) {
  const isFavorite = useSelector(isInFavoriteList(id));
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(
      isFavorite
        ? favoriteSlice.actions.removeFromFavorite(id)
        : favoriteSlice.actions.addToFavorite(id)
    );
  };
  return (
    <button onClick={handleClick} className='absolute top-2 -right-7'>
      {isFavorite ? <FilledHeart /> : <EmptyHeart />}
    </button>
  );
}
