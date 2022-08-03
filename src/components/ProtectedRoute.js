import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ login, children }) => {
  console.log('ProtectedRoute login:', login);

  return <>{login ? children : <Navigate to='/' />}</>;
};
