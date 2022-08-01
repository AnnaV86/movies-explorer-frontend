import { React, useState } from 'react';
import { NavAuth } from './components/NavAuth/NavAuth';
import { NavMovie } from './components/NavMovie/NavMovie';

export const Navigation = ({login}) => {

  return <>{login ? <NavMovie /> : <NavAuth />}</>;
};
