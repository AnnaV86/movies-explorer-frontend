import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import { Header } from '../Header/Header';
import { api } from '../../utils/MoviesApi';
export const Movies = () => {
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const [arrayMovies, setArrayMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredArrayMovies, setFilteredArrayMovies] = useState([]);
  const [shortFilter, setShortFilter] = useState(false);

  const requestArray = async (text) => {
    if (arrayMovies.length === 0) {
      setPreloaderOpen(true);
      const allMovies = await api.getMoviesListFetch();
      setArrayMovies(allMovies);
      setSearchText(text);
    }
    return setSearchText(text);
  };

  useEffect(() => {
    const filteredArray = arrayMovies.filter(
      (movie) => movie.nameRU.indexOf(searchText) >= 0
    );
    setFilteredArrayMovies(filteredArray);
    setPreloaderOpen(false);
  }, [arrayMovies, searchText]);

  const handleShortMovies = () => {};

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm
          requestArray={requestArray}
          handleShortMovies={handleShortMovies}
        />
        {preloaderOpen ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList arrayMovie={filteredArrayMovies} type={'all'} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
