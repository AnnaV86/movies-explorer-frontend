import { React } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

export const Header = ({ login }) => {
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>
      <Navigation login={login} />
    </header>
  );
};
