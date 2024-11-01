import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
  const navigate = useNavigate();
  return (
    <>
      <form>
        <input
          type='text'
          className='w-48 bg-transparent border-b border-zinc-200'
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
        />
        <button>🔎</button>
      </form>
    </>
  );
}
