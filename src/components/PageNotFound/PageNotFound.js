import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <section className='page-notfound'>
      <h1 className='notfound__title'>404</h1>
      <p className='notfound__subtitle'>Страница не найдена</p>

      <p className='notfound__link' onClick={handleClick}>
        Назад
      </p>
    </section>
  );
};
