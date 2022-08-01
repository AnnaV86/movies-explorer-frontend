import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import { Header } from '../Header/Header';

export const Profile = ({
  onSignOut,
  login,
  onClickUpdateProfile,
  messageAccept,
  isAccept,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [edit, setEdit] = useState(false);
  const [userDataUpdate, setUserDataUpdate] = useState({ name: '', email: '' });
  const [messageError, setMessageError] = useState({
    name: '',
    email: '',
  });
  const classSaveButton = classNames(`profile__save-button`, {
    'profile__save-button_disable': !isAccept,
  });
  useEffect(() => {
    setUserDataUpdate({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserDataUpdate((prev) => ({ ...prev, [name]: value }));
    setMessageError((prev) => ({
      ...prev,
      [name]: evt.target.validationMessage,
    }));
  };

  const enterUpdateProfile = (e) => {
    if (messageError.name || messageError.email) {
      return;
    }
    e.preventDefault();
    onClickUpdateProfile(userDataUpdate);
  };

  return (
    <>
      <Header login={login} />
      <main className='profile'>
        <h1 className='profile__title'>{`Привет, ${userDataUpdate.name}!`}</h1>
        <form className='profile__form'>
          <fieldset className='profile__fieldset'>
            <label className='profile__label'>Имя</label>
            <input
              type='text'
              name='name'
              defaultValue={userDataUpdate.name}
              className='profile__input profile__input_type_name'
              placeholder='Имя'
              required
              pattern='^[a-zA-ZА-Яа-яЁё\s]+$'
              minLength={2}
              maxLength={100}
              title='Кириллица'
              disabled={!edit}
              onChange={handleChange}
            />
          </fieldset>
          {messageError.name && (
            <span className='profile__span-error'>{messageError.name}</span>
          )}
          <fieldset className='profile__fieldset'>
            <label className='profile__label'>E-mail</label>
            <input
              type='email'
              name='email'
              defaultValue={userDataUpdate.email}
              className='profile__input profile__input_type_email'
              placeholder='email'
              required
              title='email'
              disabled={!edit}
              onChange={handleChange}
            />
          </fieldset>
          {messageError.email && (
            <span className='profile__span-error'>{messageError.email}</span>
          )}
          {!isAccept && <span className='profile__error'>{messageAccept}</span>}
          {edit ? (
            <button
              type='submit'
              className={classSaveButton}
              disabled={!isAccept}
              onClick={enterUpdateProfile}
            >
              Сохранить
            </button>
          ) : (
            <div className='profile__buttons'>
              <p className='profile__edit' onClick={() => setEdit(!edit)}>
                Редактировать
              </p>
              <Link to='/' className='profile__logout' onClick={onSignOut}>
                Выйти из аккаунта
              </Link>
            </div>
          )}
        </form>
      </main>
    </>
  );
};
