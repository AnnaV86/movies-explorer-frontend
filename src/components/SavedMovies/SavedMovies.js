import { useState, useContext, useEffect } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { CurrentMoviesSaveContext } from '../../contexts/CurrentMoviesSaveContext';
import { NOT_FOUND_MESSAGE } from '../../constants/index';
import { filterSaveArray } from '../../utils/filterArray';
export const SavedMovies = ({
  login,
  onClickDeleteMovie,
  openPopupsMessage,
}) => {
  const currentMovies = useContext(CurrentMoviesSaveContext);
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const [filteredArrayMovies, setFilteredArrayMovies] = useState(currentMovies);

  const onClickRequestArray = (searchData) => {
    setPreloaderOpen(true);
    const arraySearch = filterSaveArray(
      currentMovies,
      searchData.text.toLowerCase(),
      searchData.short
    );
    return renderArray(arraySearch);
  };

  const renderArray = (array) => {
    if (array.length === 0) {
      openPopupsMessage(NOT_FOUND_MESSAGE);
    } else {
      setFilteredArrayMovies(array);
    }
    return setPreloaderOpen(false);
  };

  useEffect(() => {
    setFilteredArrayMovies(currentMovies);
  }, [currentMovies]);

  return (
    <>
      <Header login={login} />
      <main className='movies'>
        <SearchForm
          onClickRequestArray={onClickRequestArray}
          openPopupsMessage={openPopupsMessage}
          type={'saveMovies'}
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
