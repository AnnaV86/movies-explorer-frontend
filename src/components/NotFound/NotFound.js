import './NotFound.css';
import { NOT_FOUND_MESSAGE, ERROR_SERVER_MESSAGE } from '../../constants';

export const NotFound = ({type}) => {
	const message = type === 'notFound' ? NOT_FOUND_MESSAGE : ERROR_SERVER_MESSAGE
  return <p className='not-found'>{message}</p>;
};
