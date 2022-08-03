import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';
import { PAGE_NOT_FOUND, NOT_FOUND_STATUS } from '../../constants';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <section className='page-notfound'>
      <h1 className='notfound__title'>{NOT_FOUND_STATUS}</h1>
      <p className='notfound__subtitle'>{PAGE_NOT_FOUND}</p>

      <p className='notfound__link' onClick={handleClick}>
        Назад
      </p>
    </section>
  );
};
