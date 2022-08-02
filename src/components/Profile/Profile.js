import { React } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import './Profile.css';
import { userData } from '../../constants/user';
import { Header } from '../Header/Header';
export const Profile = () => {
  const [edit, setEdit] = useState(false);
  // временный useState для верстки span:"При обновлении профиля
  //произошла ошибка." и неактивной кнопки Сохранить
  const [error, setError] = useState(false);
  const classSaveButton = classNames(`profile__save-button`, {
    'profile__save-button_disable': error,
  });
  const { name, email } = userData;

  return (
    <>
      <Header />
      <main className='profile'>
        <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
        <form className='profile__form'>
          <fieldset className='profile__fieldset'>
            <label className='profile__label'>Имя</label>
            <input
              type='text'
              name='name'
              defaultValue={name}
              className='profile__input profile__input_type_name'
              placeholder='Имя'
              required
              pattern='^[a-zA-ZА-Яа-яЁё\s]+$'
              minLength={2}
              maxLength={100}
              title='Кириллица'
              disabled={!edit}
            />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label className='profile__label'>E-mail</label>
            <input
              type='email'
              name='email'
              defaultValue={email}
              className='profile__input profile__input_type_email'
              placeholder='email'
              required
              title='email'
              disabled={!edit}
            />
          </fieldset>
          {error && (
            <span className='profile__error'>
              При обновлении профиля произошла ошибка.
            </span>
          )}
          {edit ? (
            <button type='submit' className={classSaveButton} disabled={error}>
              Сохранить
            </button>
          ) : (
            <div className='profile__buttons'>
              <p className='profile__edit' onClick={() => setEdit(!edit)}>
                Редактировать
              </p>
              <Link to='/' className='profile__logout'>
                Выйти из аккаунта
              </Link>
            </div>
          )}
        </form>
      </main>
    </>
  );
};
