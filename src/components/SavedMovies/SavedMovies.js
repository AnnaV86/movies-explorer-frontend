import { useState, useContext, useEffect } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { CurrentMoviesSaveContext } from '../../contexts/CurrentMoviesSaveContext';
import { NotFound } from '../NotFound/NotFound';
export const SavedMovies = ({ login }) => {
  const currentMovies = useContext(CurrentMoviesSaveContext);
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    setPreloaderOpen(true);
    if (currentMovies.length === 0) {
      setMessage('Ничего не найдено');
    }
    setPreloaderOpen(false);
  }, [currentMovies]);

  return (
    <>
      <Header login={login} />
      <main className='movies'>
        <SearchForm />
        {message && <NotFound type={'notFound'} />}
        {preloaderOpen ? (
          <Preloader />
        ) : (
          currentMovies.length > 0 && (
            <>
              <MoviesCardList arreyMovie={currentMovies} type={'save'} />
              <div className='indent'></div>
            </>
          )
        )}
      </main>
      <Footer />
    </>
  );
};
