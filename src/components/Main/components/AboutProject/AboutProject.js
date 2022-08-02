import './AboutProject.css';
export const AboutProject = () => {
  return (
    <section className='about-project' id='about-project'>
      <h1 className='title'>О проекте</h1>
      <ul className='text__list'>
        <li className='text__item'>
          <h2 className='text__title'>Дипломный проект включал 5 этапов</h2>
          <p className='text__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='text__item'>
          <h2 className='text__title'>На выполнение диплома ушло 5 недель</h2>
          <p className='text__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='week__container'>
        <div className='week__item week__item_back'>
          <p className='week__item-duration week__item-duration_one'>
            1 неделя
          </p>
          <p className='week__title'>Back-end</p>
        </div>
        <div className='week__item week__item_front'>
          <p className='week__item-duration week__item-duration_four'>
            4 недели
          </p>
          <p className='week__title'>Front-end</p>
        </div>
      </div>
    </section>
  );
};
