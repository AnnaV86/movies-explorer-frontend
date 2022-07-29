import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavMovie.css';
import { HiddenMenu } from './HiddenMenu/HiddenMenu';

export const NavMovie = () => {
  const [toggle, setToggle] = useState(true);

  const onClickOpenMenu = () => {
    setToggle(false);
  };

  const onClickCloseMenu = () => {
    setToggle(true);
  };

  return (
    <>
      {toggle ? (
        <div className='nav-menu__menu-adapt' onClick={onClickOpenMenu}></div>
      ) : (
        <HiddenMenu onClickCloseMenu={onClickCloseMenu} />
      )}
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
    </>
  );
};
