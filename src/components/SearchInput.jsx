import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
  const navigate = useNavigate();
  return (
    <>
      <form>
        <button>🔎</button>
        <input
          type='text'
          className='w-72 bg-transparent border-b border-zinc-200 ml-3'
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
        />
      </form>
    </>
  );
}
