import { React, useState } from 'react';
import { NavAuth } from './components/NavAuth/NavAuth';
import { NavMovie } from './components/NavMovie/NavMovie';

export const Navigation = () => {
  // Данный useState временный, для выполнения этапа верстка
  const [login, setLogin] = useState(true);

  return <>{login ? <NavMovie /> : <NavAuth />}</>;
};
