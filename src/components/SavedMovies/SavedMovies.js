import { useState } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
export const SavedMovies = () => {
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const [arreyMovie, setArreyMovie] = useState([]);
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
