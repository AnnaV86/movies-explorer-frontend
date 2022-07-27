import { React, useState } from 'react';
import { NavAuth } from './components/NavAuth/NavAuth';
import { NavMovie } from './components/NavMovie/NavMovie';

export const Navigation = () => {
  const [login, setLogin] = useState(true);

  return <>{login ? <NavMovie /> : <NavAuth />}</>;
};
