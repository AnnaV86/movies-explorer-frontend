import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { Movies } from './components/Movies/Movies';
import { Footer } from './components/Footer/Footer';
import { SavedMovies } from './components/SavedMovies/SavedMovies';
import { Profile } from './components/Profile/Profile';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Header } from './components/Header/Header';
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='page'>
      <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
