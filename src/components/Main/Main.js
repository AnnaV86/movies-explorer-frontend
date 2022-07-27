import { Promo } from './components/Promo/Promo';
import { AboutProject } from './components/AboutProject/AboutProject';
import './Main.css';
import { Techs } from './components/Techs/Techs';
import { AboutMe } from './components/AboutMe/AboutMe';

export const Main = () => {
  return (
    <main className='content'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
};
