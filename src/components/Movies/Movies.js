import { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { arreyMovie } from '../../constants/arrayMovie';
import './Movies.css';
import { Header } from '../Header/Header';
export const Movies = () => {
  // Данный useState временный, для выполнения этапа верстка
  const [preloaderOpen, setPreloaderOpen] = useState(false);

  return (
    <>
      <Header />
      <section className='movies'>
        <SearchForm />
        {preloaderOpen ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList arreyMovie={arreyMovie} />
            <section className='more'>
              <button className='more__button'>Ещё</button>
            </section>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};
