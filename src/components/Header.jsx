import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-center bg-zinc-950 p-5 gap-5 border-b border-zinc-700 fixed top-0 left-0 w-full h-36 z-50'>
      <Link to='/'>
        <h1 className='inline-block text-5xl font-bold font-galmuri9 '>
          포켓몬 도감
        </h1>
      </Link>
      <nav className='flex gap-7 font-galmuri9'>
        <Link to={'/'}>메인</Link>
        <Link to={'search'}>검색</Link>
        <Link to={'favorite'}>찜 목록</Link>
      </nav>
    </header>
  );
}
