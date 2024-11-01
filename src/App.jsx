import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { fetchPokemonDataById } from './RTK/thunk';
import { useDispatch } from 'react-redux';
import Loading from './pages/Loading';

const Main = lazy(() => import('./pages/Main'));
const Header = lazy(() => import('./components/Header'));
const Detail = lazy(() => import('./pages/Detail'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Search = lazy(() => import('./pages/Search'));

const MAX_ID = 151;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonDataById(MAX_ID));
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <section className='mt-36 p-5 flex justify-center'>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/detail/:id'} element={<Detail />} />
            <Route path={'/search'} element={<Search />} />
            <Route path={'/favorite'} element={<Favorites />} />
          </Routes>
        </section>
      </Suspense>
    </>
  );
}

export default App;
