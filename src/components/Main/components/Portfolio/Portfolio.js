import './Portfolio.css';
export const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h1 className='portfolio__title'>Портфолио</h1>
      <ul className='website__list'>
        <li className='website__item'>
          <a
            className='website__item-link'
            target={'_blank'}
            rel='noopener noreferrer'
            href='https://github.com/AnnaV86/how-to-learn'
          >
            <p className='website__item-text'>Статичный сайт</p>
            <p className='website__item-arrow'>↗</p>
          </a>
        </li>

        <li className='website__item'>
          <a
            className='website__item-link'
            target={'_blank'}
            rel='noopener noreferrer'
            href='https://github.com/AnnaV86/russian-travel'
          >
            <p className='website__item-text'>Адаптивный сайт</p>
            <p className='website__item-arrow'>↗</p>
          </a>
        </li>
        <li className='website__item'>
          <a
            className='website__item-link'
            target={'_blank'}
            rel='noopener noreferrer'
            href='https://github.com/AnnaV86/react-mesto-api-full'
          >
            <p className='website__item-text'>Одностраничное приложение</p>
            <p className='website__item-arrow'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
};
