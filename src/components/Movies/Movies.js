import { useState } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './Movies.css';
export const Movies = () => {
  const [preloaderOpen, setPreloaderOpen] = useState(false);

  return (
    <section className='movies'>
      <SearchForm />
      {preloaderOpen ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList />
          <section className='more'>
            <button className='more__button'>Ещё</button>
          </section>
        </>
      )}
    </section>
  );
};
