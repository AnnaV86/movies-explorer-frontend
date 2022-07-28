import './MoviesCardList.css';
import { MoviesCard } from './components/MoviesCard/MoviesCard';

export const MoviesCardList = ({ arreyMovie }) => {
  return (
    <section className='movie-card-list'>
      <ul className='elements'>
        {arreyMovie.map((movie) => {
          return <MoviesCard movie={movie} key={movie._id} />;
        })}
      </ul>
    </section>
  );
};
