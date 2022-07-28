import './Form.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useState } from 'react';
export const Form = ({ title, type, button, text }) => {
  const [messageError, setMessageError] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  // console.log(messageError);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    setMessageError((prev) => ({
      ...prev,
      [name]: evt.target.validationMessage,
    }));
  };

  return (
    <section className='form-enter'>
      <form className='form'>
        <Link to='/' className='form__link'>
          <img className='form__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='form__title'>{title}</h1>
        <div className='form-fieldsets__wrapper'>
          {type === 'signup' && (
            <fieldset className='form__fieldset'>
              <label className='form__label'>Имя</label>
              <input
                type='text'
                className={
                  messageError.name ? 'form__input error' : 'form__input'
                }
                name='name'
                required
                pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
                minLength={2}
                maxLength={100}
                value={value.name}
                onChange={handleChange}
              />
              {messageError.name && (
                <span className='form__span-error'>{messageError.name}</span>
              )}
            </fieldset>
          )}
          <fieldset className='form__fieldset'>
            <label className='form__label'>E-mail</label>
            <input
              type='email'
              className={
                messageError.email ? 'form__input error' : 'form__input'
              }
              name='email'
              required
              value={value.email}
              onChange={handleChange}
            />
            {messageError.email && (
              <span
                className={
                  messageError.email.length < 80
                    ? 'form__span-error'
                    : 'form__span-error form__span-error_type_long'
                }
              >
                {messageError.email}
              </span>
            )}
          </fieldset>
          <fieldset className='form__fieldset'>
            <label className='form__label'>Пароль</label>
            <input
              type='password'
              className={
                messageError.password ? 'form__input error' : 'form__input'
              }
              name='password'
              value={value.password}
              required
              minLength={8}
              onChange={handleChange}
            />
            {messageError.password && (
              <span className='form__span-error'>{messageError.password}</span>
            )}
          </fieldset>
        </div>
        <button className='form__button'>{button}</button>
        <p className='form__text'>
          {text}
          {type === 'signup' ? (
            <Link className='form-link__text' to='/signin'>
              Войти
            </Link>
          ) : (
            <Link className='form-link__text' to='/signup'>
              Регистрация
            </Link>
          )}
        </p>
      </form>
    </section>
  );
};
