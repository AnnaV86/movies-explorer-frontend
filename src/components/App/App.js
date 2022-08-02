import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import './App.css';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { ProtectedRoute } from '../ProtectedRoute';
import {
  headers,
  getUserInfo,
  getMovies,
  updateUserData,
  addSaveMovies,
  deleteSaveMovies,
} from '../../utils/MainApi';
import { signupFetch, signinFetch, validJWTFetch } from '../../utils/auth';
import { CurrentMoviesSaveContext } from '../../contexts/CurrentMoviesSaveContext';
import { InfoToolTip } from '../InfoToolTip/InfoToolTip';

export const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [currentMovies, setCurrentMovies] = useState([]);
  const [messageAcceptAuth, setMessageAcceptAuth] = useState('');
  const [isAccept, setIsAccept] = useState(true);
  const [login, setLogin] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltip] = useState(false);
  let messageClean;

  // Регистрация
  const onRegister = async (userData) => {
    setMessageAcceptAuth('');
    setIsAccept(false);

    const response = await signupFetch(userData);

    if (response._id) {
      setIsAccept(true);
      setMessageAcceptAuth('Вы успешно зарегистрировались!');
      setIsAccept(false);
      messageClean = setTimeout(() => {
        setIsAccept(true);
        setMessageAcceptAuth('');
      }, 5000);
      return onLogin(userData);
    }
    if (response.message === '409') {
      setMessageAcceptAuth('Пользователем с данным email уже зарегистрирован');
    } else {
      setMessageAcceptAuth('Что-то пошло не так! Попробуйте ещё раз.');
    }
    setIsAccept(false);
    messageClean = setTimeout(() => {
      setIsAccept(true);
      setMessageAcceptAuth('');
    }, 5000);
  };

  // Проверка токена
  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return validJWTFetch();
  };

  // Авторизация (вход)
  const onLogin = async (userData) => {
    setMessageAcceptAuth('');
    setIsAccept(false);

    const userDataAuth = { email: userData.email, password: userData.password };
    const response = await signinFetch(userDataAuth);

    if (response.token) {
      localStorage.setItem('token', response.token);
      headers.authorization = `Bearer ${localStorage.getItem('token')}`;
      setLogin(true);
      navigate('/movies');
    }
    if (response.message === '401') {
      setMessageAcceptAuth('Неправильные почта или пароль');
      setIsAccept(false);
    } else {
      setMessageAcceptAuth('Что-то пошло не так! Попробуйте ещё раз.');
      setIsAccept(false);
    }
    messageClean = setTimeout(() => {
      setIsAccept(true);
      setMessageAcceptAuth('');
    }, 5000);
  };

  // Выход из аккаунта
  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('arrayAllMovies');
    localStorage.removeItem('searchText');
    localStorage.removeItem('shortFilter');
    setLogin(false);
  };

  // Редактирование профиля
  const onClickUpdateProfile = async (userDataNew) => {
    const response = await updateUserData(userDataNew);

    if (response._id) {
      setIsAccept(false);
      setMessageAcceptAuth('Данные успешно изменены!');
      setCurrentUser(userDataNew);
    } else if (response.message === '409') {
      setIsAccept(false);
      setMessageAcceptAuth('Пользователем с данным email уже зарегистрирован');
    } else {
      setIsAccept(false);
      setMessageAcceptAuth('Что-то пошло не так! Попробуйте ещё раз.');
    }
    messageClean = setTimeout(() => {
      setIsAccept(true);
      setMessageAcceptAuth('');
    }, 5000);
  };

  // Удаление фильма из сохраненных по id
  const onClickDeleteMovie = async (id) => {
    const response = await deleteSaveMovies(id);
    if (response.message === 'Фильм удалён') {
      setCurrentMovies((prev) => prev.filter((el) => el._id !== id));
    } else {
      setIsAccept(false);
      setMessageAcceptAuth('Что-то пошло не так! Попробуйте ещё раз.');
    }
  };

  // Сохранение фильма по id
  const onClickSaveMovie = async (movie, status, id) => {
    if (status === 'delete') {
      onClickDeleteMovie(id);
      return;
    }
    const movieNew = {
      ...movie,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    };
    delete movieNew.id;
    delete movieNew.created_at;
    delete movieNew.updated_at;
    const response = await addSaveMovies(movieNew);
    if (response._id) {
      setCurrentMovies((prev) => [...prev, response]);
    } else if (response.message === '400') {
      setMessageAcceptAuth(
        'Что-то пошло не так! Данный фильм не может быть сохранён'
      );
      setInfoTooltip(true);
    } else {
      setMessageAcceptAuth('Что-то пошло не так! Попробуйте ещё раз.');
      setInfoTooltip(true);
    }
  };

  const closePopupsMessage = () => {
    setInfoTooltip(false);
    setMessageAcceptAuth('');
  };

  const openPopupsMessage = (message) => {
    setInfoTooltip(true);
    setMessageAcceptAuth(message);
  };

  useEffect(() => {
    (async () => {
      const response = await tokenCheck();
      if (response) {
        setLogin(true);
      }
    })();
  }, [login, navigate]);

  useEffect(() => {
    if (login) {
      (async () => {
        const user = await getUserInfo();
        const cards = await getMovies();
        setCurrentUser(user);
        setCurrentMovies(cards);
      })();
    }

    return clearTimeout(messageClean);
  }, [login, navigate]);

  useEffect(() => {
    setIsAccept(true);
    setMessageAcceptAuth('');
  }, [navigate]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentMoviesSaveContext.Provider value={currentMovies}>
        {
          <div className='page'>
            <Routes>
              <Route exact path='/' element={<Main login={login} />} />
              <Route
                path='/movies'
                element={
                  <ProtectedRoute login={login}>
                    <Movies
                      login={login}
                      onClickSaveMovie={onClickSaveMovie}
                      openPopupsMessage={openPopupsMessage}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/saved-movies'
                element={
                  <ProtectedRoute login={login}>
                    <SavedMovies
                      login={login}
                      onClickDeleteMovie={onClickDeleteMovie}
                      openPopupsMessage={openPopupsMessage}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/profile'
                element={
                  <ProtectedRoute login={login}>
                    <Profile
                      onSignOut={onSignOut}
                      login={login}
                      onClickUpdateProfile={onClickUpdateProfile}
                      messageAccept={messageAcceptAuth}
                      isAccept={isAccept}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/signin'
                element={
                  <Login
                    onLogin={onLogin}
                    messageAcceptAuth={messageAcceptAuth}
                    isAccept={isAccept}
                  />
                }
              />
              <Route
                path='/signup'
                element={
                  <Register
                    onRegister={onRegister}
                    messageAcceptAuth={messageAcceptAuth}
                    isAccept={isAccept}
                  />
                }
              />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
            <InfoToolTip
              isOpen={isInfoTooltipOpen}
              onClose={closePopupsMessage}
              isAccept={isAccept}
              messageAcceptAuth={messageAcceptAuth}
            />
          </div>
        }
      </CurrentMoviesSaveContext.Provider>
    </CurrentUserContext.Provider>
  );
};
