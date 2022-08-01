import { useState, useContext, useEffect } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { CurrentMoviesSaveContext } from '../../contexts/CurrentMoviesSaveContext';
import { NOT_FOUND_MESSAGE } from '../../constants/index';
export const SavedMovies = ({
  login,
  onClickDeleteMovie,
  openPopupsMessage,
}) => {
  const currentMovies = useContext(CurrentMoviesSaveContext);
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [shortFilter, setShortFilter] = useState(false);
  const [filteredArrayMovies, setFilteredArrayMovies] = useState(currentMovies);

  const requestArray = (searchData) => {
    setSearchText(searchData.text);
    return setShortFilter(searchData.short);
  };

  useEffect(() => {
    const filteredArray = currentMovies.filter(
      (movie) => movie.nameRU.indexOf(searchText) >= 0
    );
    if (shortFilter) {
      const shortArray = filteredArray.filter((movie) => movie.duration < 41);
      if (shortArray.length === 0) {
        openPopupsMessage(NOT_FOUND_MESSAGE);
      } else {
        setFilteredArrayMovies(shortArray);
      }
    } else {
      if (filteredArray.length === 0) {
        openPopupsMessage(NOT_FOUND_MESSAGE);
      } else setFilteredArrayMovies(filteredArray);
    }
    return setPreloaderOpen(false);
  }, [currentMovies, searchText, shortFilter]);

  return (
    <>
      <Header login={login} />
      <main className='movies'>
        <SearchForm
          requestArray={requestArray}
          openPopupsMessage={openPopupsMessage}
        />
        {preloaderOpen ? (
          <Preloader />
        ) : (
          currentMovies.length > 0 && (
            <>
              <MoviesCardList
                arrayMovie={filteredArrayMovies}
                type={'save'}
                onClickButtonMovie={onClickDeleteMovie}
              />
              <div className='indent'></div>
            </>
          )
        )}
      </main>
      <Footer />
    </>
  );
};
