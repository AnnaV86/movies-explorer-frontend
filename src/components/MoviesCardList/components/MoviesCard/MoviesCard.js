import './MoviesCard.css';
export const MoviesCard = ({ movie }) => {
  const { nameRU, duration, image, save } = movie;

  const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  };

  const duretionHour = getTimeFromMins(duration);

  return (
    <section className='movie-card'>
      <div className='movie__info'>
        <div className='movie__text'>
          {' '}
          <h1 className='movie__title'>{nameRU}</h1>
          <p className='movie__duration'>{duretionHour}</p>
        </div>
        {save ? (
          <button className='movie__button movie__button_type_active'></button>
        ) : (
          <button className='movie__button movie__button_type_disabled'></button>
        )}
      </div>
      <img className='movie__image' src={image} alt={nameRU} />
    </section>
  );
};
