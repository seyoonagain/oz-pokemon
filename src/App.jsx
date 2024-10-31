import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import { useEffect } from 'react';
import { fetchPokemonDataById } from './RTK/thunk';
import { useDispatch } from 'react-redux';

const MAX_ID = 151;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonDataById(MAX_ID));
  }, [dispatch]);
  return (
    <>
      <Header />
      <section className='mt-36 p-5 flex justify-center'>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/detail/:id'} element={<Detail />} />
          <Route path={'/search'} element={<Search />} />
          <Route path={'/favorite'} element={<Favorites />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
