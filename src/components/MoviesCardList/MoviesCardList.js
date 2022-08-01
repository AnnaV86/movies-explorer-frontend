import React, { useEffect, useState, useContext } from 'react';
import './MoviesCardList.css';
import { MoviesCard } from './components/MoviesCard/MoviesCard';
import { More } from './components/More/More';

export const MoviesCardList = ({ arrayMovie, type, onClickButtonMovie }) => {
  const [counter, setCounter] = useState();
  const [moreCard, setMoreCard] = useState();

  const determiningCountCards = (width) => {
    if (width > 1279) {
      setCounter(12);
      return setMoreCard(3);
    } else if (width > 767) {
      setCounter(8);
      return setMoreCard(2);
    } else setCounter(5);
    return setMoreCard(2);
  };

  useEffect(() => {
    const width = window.innerWidth;
    determiningCountCards(width);
  }, []);

  const addCounter = () => setCounter((...prev) => Number(prev) + moreCard);

  useEffect(() => {
    const setTimeOut = (e) => setTimeout(determiningCountCards(e), 3000);
    window.addEventListener('resize', (e) =>
      setTimeOut(e.currentTarget.innerWidth)
    );
    return window.removeEventListener('resize', (e) =>
      setTimeOut(e.currentTarget.innerWidth)
    );
  }, []);

  return (
    <section className='movie-card-list'>
      <ul className='elements'>
        {type === 'all'
          ? arrayMovie.slice(0, counter).map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  type={type}
                  onClickButtonMovie={onClickButtonMovie}
                />
              );
            })
          : arrayMovie.map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  type={type}
                  onClickButtonMovie={onClickButtonMovie}
                />
              );
            })}
      </ul>
      {arrayMovie.length > counter && <More addCounter={addCounter} />}
    </section>
  );
};
