import { React } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import './Header.css';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='header__link'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>
      <Navigation />
    </div>
  );
};