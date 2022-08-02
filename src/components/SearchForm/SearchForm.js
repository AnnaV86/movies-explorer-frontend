import { useEffect, useState } from 'react';
import './SearchForm.css';
export const SearchForm = ({
  onClickRequestArray,
  openPopupsMessage,
  type,
}) => {
  const [value, setValue] = useState({ text: '', short: 'off' });
  const [tumbler, setTumbler] = useState(false);
  const [messageError, setMessageError] = useState('');

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setValue((prev) => ({ ...prev, text: value }));
    setMessageError(evt.target.validationMessage);
  };

  const handleShort = () => {
    setValue((prev) => ({
      ...prev,
      short: value.short === 'off' ? 'on' : 'off',
    }));
    setTumbler(!tumbler);
  };

  const onClickSearch = () => {
    if (messageError) {
      return openPopupsMessage('Нужно ввести ключевое слово');
    } else return onClickRequestArray(value);
  };

  useEffect(() => {
    if (type === 'allMovies') {
      const searchText = localStorage.getItem('searchText');
      const shortFilter = localStorage.getItem('shortFilter');
      setValue({ text: searchText, short: shortFilter });
      setTumbler(shortFilter === 'on' ? true : false);
    }
  }, []);

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
            value={value.short}
            name='short'
            checked={tumbler}
            onChange={handleShort}
          />
          <span className='checkbox__pseudo'></span>
          Короткометражки
        </label>
      </form>
      {messageError && <span className='form__span-error'>{messageError}</span>}
    </section>
  );
};
