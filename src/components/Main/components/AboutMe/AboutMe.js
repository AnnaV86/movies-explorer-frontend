import { Portfolio } from '../Portfolio/Portfolio';
import './AboutMe.css';
import photo from '../../../../images/photo.jpg';
export const AboutMe = () => {
  return (
    <section className='about-me' id='about-me'>
      <h1 className='title'>Студент</h1>
      <div className='about-me__content'>
        <div className='content-text'>
          <h2 className='about-me__name'>Анна</h2>
          <h3 className='about-me__profession'>Фронтенд-разработчик, 35лет</h3>
          <p className='about-me__text'>
            Я родилась в г.Пермь, закончила факультет экономики ПГСХА
            им.Прянишникова Д.Н. У меня есть муж и двое детей. Самостоятельно
            научилась создавать компьютерную анимацию. Больше года назад решила
            освоить профессию фронтент-разработчика и поняла, что мне это
            нравится! Вперед к новым знаниям и вершинам!
          </p>
          <ul className='about-me__link-list'>
            <li className='about-me__link-item'>
              <a
                className='about-me__link'
                target={'_blank'}
                rel='noopener noreferrer'
                href='https://career.habr.com/annavidutina'
              >
                ХабрКарьера
              </a>
            </li>
            <li className='about-me__link-item'>
              <a
                className='about-me__link'
                target={'_blank'}
                rel='noopener noreferrer'
                href='https://github.com/AnnaV86'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className='photo' alt='Фото профиля' src={photo} />
      </div>
      <Portfolio />
    </section>
  );
};
