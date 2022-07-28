import { useState } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { arreyMovie } from '../../constants/arrayMovie';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
export const SavedMovies = () => {
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const saveArreyMovie = arreyMovie.filter((movie) => movie.save);

  return (
    <>
      <Header />
      <section className='movies'>
        <SearchForm />
        {preloaderOpen ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList arreyMovie={saveArreyMovie} />
            <div className='indent'></div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};
