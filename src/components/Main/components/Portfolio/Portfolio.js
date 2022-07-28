import './Portfolio.css';
export const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h1 className='portfolio__title'>Портфолио</h1>
      <ul className='website__list'>
        <li className='website__item'>
          <p className='website__item-text'>Статичный сайт</p>
          <a
            className='website__item-link'
            target={'_blank'}
            rel='noopener noreferrer'
            href='https://github.com/AnnaV86/how-to-learn'
          >
            ↗
          </a>
        </li>
        <li className='website__item'>
          <p className='website__item-text'>Адаптивный сайт</p>
          <a
            className='website__item-link'
            target={'_blank'}
            rel='noopener noreferrer'
            href='https://github.com/AnnaV86/russian-travel'
          >
            ↗
          </a>
        </li>
        <li className='website__item'>
          <p className='website__item-text'>Одностраничное приложение</p>
          <a
            className='website__item-link'
            target={'_blank'}
            rel='noopener noreferrer'
            href='https://github.com/AnnaV86/react-mesto-api-full'
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
};
