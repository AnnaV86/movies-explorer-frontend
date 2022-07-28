import './SearchForm.css';
export const SearchForm = () => {
  return (
    <section className='search-form'>
      <form className='form'>
        <div className='search-movie'>
          <input
            className='form__input'
            type='text'
            placeholder={`        Фильм`}
          />
          <button className='form__button' type='button'></button>
        </div>
        <label className='checkbox__label'>
          <input className='checkbox' type='checkbox' value='short' />
          <span className='checkbox__pseudo'></span>
          Короткометражки
        </label>
      </form>
    </section>
  );
};
