import { useState } from 'react';
import './MoviesCardList.css';
import { MoviesCard } from './components/MoviesCard/MoviesCard';
import { arreyMovie } from '../../constants/arrayMovie';

export const MoviesCardList = () => {
  return (
    <section className='movie-card-list'>
      {arreyMovie.forEach((movie) => {
        return <MoviesCard movie={movie} key={movie._id} />;
      })}
    </section>
  );
};
