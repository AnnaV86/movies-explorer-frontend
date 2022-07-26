import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavAuth.css';

export const NavAuth = () => {
  return (
    <nav className='menu'>
      <NavLink to='/signup' className='menu__link'>
        Регистрация
      </NavLink>
      <button className='button'>
        <NavLink to='/signin' className='menu__link'>
          Войти
        </NavLink>
      </button>
    </nav>
  );
};
