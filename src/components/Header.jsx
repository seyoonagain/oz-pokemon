import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import { useState } from 'react';

export default function Header() {
  return (
    <header className='flex flex-col items-end gap-3 bg-zinc-950 p-5 border-b border-zinc-700 fixed top-0 left-0 w-full h-32 z-50'>
      <div className='w-full flex justify-between'>
        <Link to='/'>
          <h1 className='inline-block text-3xl md:text-4xl font-bold font-galmuri9 '>
            포켓몬 도감
          </h1>
        </Link>
        <Link to='/favorite'>
          <p className='font-galmuri9'>찜 목록</p>
        </Link>
      </div>
      <SearchInput />
    </header>
  );
}
