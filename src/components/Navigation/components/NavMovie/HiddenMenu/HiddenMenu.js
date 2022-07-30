import { NavLink } from 'react-router-dom';
import './HiddenMenu.css';

export const HiddenMenu = ({ onClickCloseMenu }) => {
  return (
    <section className='hidden-menu'>
      <nav className='nav-movie__menu_adapt'>
        <div className='nav-menu__close' onClick={onClickCloseMenu}></div>
        <div className='nav-movie__movie_adapt'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active-adapt'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Сохранённые фильмы
          </NavLink>
        </div>

        <NavLink
          to='/profile'
          className='nav-movie__link-adapt nav-movie__link-adapt_profile'
          onClick={onClickCloseMenu}
        >
          Аккаунт
        </NavLink>
      </nav>
    </section>
  );
};
