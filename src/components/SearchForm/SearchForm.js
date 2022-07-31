import { useState } from 'react';
import './SearchForm.css';
export const SearchForm = ({ requestArray, handleShortMovies }) => {
  const [value, setValue] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setValue(value);
    setMessageError(evt.target.validationMessage);
  };

  const onClickSearch = () => {
    if (messageError) {
      return console.log('ошибка');
    } else return requestArray(value);
  };

  return (
    <section className='search'>
      <form className='search-form'>
        <div className='search-movie'>
          <input
            className='search-form__input'
            type='text'
            placeholder={`Фильм`}
            value={value}
            onChange={handleChange}
            required
          />
          <button
            className='search-form__button'
            type='button'
            onClick={onClickSearch}
          ></button>
        </div>
        <label className='checkbox__label'>
          <input className='checkbox' type='checkbox' value='short' />
          <span className='checkbox__pseudo' onClick={handleShortMovies}></span>
          Короткометражки
        </label>
      </form>
      {messageError && <span className='form__span-error'>{messageError}</span>}
    </section>
  );
};
