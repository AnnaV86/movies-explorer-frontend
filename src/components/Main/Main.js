import React from 'react';
import { Promo } from './components/Promo/Promo';
import { AboutProject } from './components/AboutProject/AboutProject';
import './Main.css';
import { Techs } from './components/Techs/Techs';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Main = ({ login }) => {
  console.log('я в Main');
  return (
    <>
      <Header login={login} />
      <main className='content'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(Main);
