import { Promo } from './components/Promo/Promo';
import { AboutProject } from './components/AboutProject/AboutProject';
import './Main.css';
import { Techs } from './components/Techs/Techs';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Main = ({ login }) => {
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
