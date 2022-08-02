import { useState } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { arreyMovie } from '../../constants/arrayMovie';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
export const SavedMovies = () => {
  // Данный useState временный, для выполнения этапа верстка
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const saveArreyMovie = arreyMovie.filter((movie) => movie.save);

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        {preloaderOpen ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList arreyMovie={saveArreyMovie} type={'save'} />
            <div className='indent'></div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
