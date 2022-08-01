import { useState } from 'react';
import './SearchForm.css';
export const SearchForm = ({ requestArray, openPopupsMessage }) => {
  const [value, setValue] = useState({ text: '', short: false });
  const [messageError, setMessageError] = useState('');

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setValue((prev) => ({ ...prev, text: value }));
    setMessageError(evt.target.validationMessage);
  };

  const handleShort = () => {
    setValue((prev) => ({ ...prev, short: !value.short }));
  };

  const onClickSearch = () => {
    if (messageError) {
      return openPopupsMessage('Пожалуйста, заполните форму поиска');
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
            value={value.text}
            onChange={handleChange}
            name='text'
            required
          />
          <button
            className='search-form__button'
            type='button'
            onClick={(e) => onClickSearch(e)}
          ></button>
        </div>
        <label className='checkbox__label'>
          <input
            className='checkbox'
            type='checkbox'
            value={true}
            name='short'
            onClick={handleShort}
          />
          <span className='checkbox__pseudo'></span>
          Короткометражки
        </label>
      </form>
      {messageError && <span className='form__span-error'>{messageError}</span>}
    </section>
  );
};
