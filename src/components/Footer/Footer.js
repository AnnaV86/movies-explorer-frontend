import './Footer.css';
export const Footer = () => {
  return (
    <footer className='footer'>
      <h1 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h1>
      <div className='footer__info'>
        <p className='footer__year'>&copy; 2022</p>
        <ul className='footer__list'>
          <li className='footer__list-item'>
            <a
              className='footer__list-link'
              target={'_blank'}
              rel='noopener noreferrer'
              href='https://practicum.yandex.ru/'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__list-item'>
            <a
              className='footer__list-link'
              target={'_blank'}
              rel='noopener noreferrer'
              href='https://github.com/AnnaV86'
            >
              Github
            </a>
          </li>
          <li className='footer__list-item'>
            <a
              className='footer__list-link'
              target={'_blank'}
              rel='noopener noreferrer'
              href='https://career.habr.com/annavidutina'
            >
              ХабрКарьера
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
