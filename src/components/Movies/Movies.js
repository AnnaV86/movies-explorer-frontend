import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import { Header } from '../Header/Header';
import { getMoviesListFetch } from '../../utils/MoviesApi';
import { NotFound } from '../NotFound/NotFound';
export const Movies = ({ login }) => {
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const [arrayMovies, setArrayMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredArrayMovies, setFilteredArrayMovies] = useState([]);
  const [shortFilter, setShortFilter] = useState(false);
  const [message, setMessage] = useState(false);

  const requestArray = async (searchData) => {
    if (arrayMovies.length === 0) {
      setPreloaderOpen(true);
      const allMovies = await getMoviesListFetch();
      setArrayMovies(allMovies);
    }
    setSearchText(searchData.text);
    return setShortFilter(searchData.short);
  };

  useEffect(() => {
    const filteredArray = arrayMovies.filter(
      (movie) => movie.nameRU.indexOf(searchText) >= 0
    );
    if (shortFilter) {
      const shortArray = filteredArray.filter((movie) => movie.duration < 41);
      if (arrayMovies.length > 0 && shortArray.length === 0) {
        setMessage(true);
      } else {
        setMessage(false);
      }
      setFilteredArrayMovies(shortArray);
    } else {
      if (arrayMovies.length > 0 && filteredArray.length === 0) {
        setMessage(true);
      } else setMessage(false);
      setFilteredArrayMovies(filteredArray);
    }
    return setPreloaderOpen(false);
  }, [arrayMovies, searchText, shortFilter]);

  return (
    <>
      <Header login={login} />
      <main className='movies'>
        <SearchForm requestArray={requestArray} />
        {message && <NotFound type={'notFound'} />}
        {preloaderOpen ? (
          <Preloader />
        ) : (
          <MoviesCardList arrayMovie={filteredArrayMovies} type={'all'} />
        )}
      </main>
      <Footer />
    </>
  );
};
