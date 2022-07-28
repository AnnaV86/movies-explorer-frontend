import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMovie.css';

export const NavMovie = () => {
  return (
    <nav className='nav-movie__menu'>
      <div className='nav-movie__movie'>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            isActive ? 'nav-movie__link active' : 'nav-movie__link'
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className={({ isActive }) =>
            isActive ? 'nav-movie__link active' : 'nav-movie__link'
          }
        >
          Сохранённые фильмы
        </NavLink>
      </div>

      <NavLink
        to='/profile'
        className='nav-movie__link nav-movie__link_profile'
      >
        Аккаунт
      </NavLink>
    </nav>
  );
};
