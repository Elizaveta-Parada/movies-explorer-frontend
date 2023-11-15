import { Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext'
import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import * as auth from '../../utils/auth';
import * as mainApi from '../../utils/MainApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const jwt = localStorage.getItem('jwt')
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({})
  const [savedMovies, setSavedMovies] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState('');
  const [edit, setEdit] = useState(false);
  const [isError, setIsError] = useState(false)


  // Получение данных пользователя и фильмов с сервера
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        mainApi.getUserInfo(jwt),
        mainApi.getMovies(jwt)
      ])
        .then(([dataUserInfo, dataMovie]) => {
          setCurrentUser(dataUserInfo)
          setSavedMovies(dataMovie.reverse())
        })
        .catch((error) => {
          console.log(`Ошибка при загрузке страницы ${error}`)
        })
    }
  }, [isLoggedIn, jwt])


  // Проверка токена и авторизация пользователя

  function authCheck(jwt) {
    auth.checkToken(jwt)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => { console.log(`Ошибка авторизации ${error}`) })
  }

  useEffect(() => {
    if (jwt) {
      authCheck(jwt)
    }
  }, [jwt])


  function handleLoginSubmit(email, password) {
    auth
      .login(email, password)
      .then((res) => {
        if (!res || res.status === 401) {
          setMessage("Неверное имя пользователя или пароль")
        };
        if (res.token) {
          setIsError(false)
          setMessage('')
          localStorage.setItem('jwt', res.token);
          setIsLoggedIn(true);
          navigate('/movies')
        }
      })
      .catch((err) => {
        setIsError(true)
        if (err === 'код ошибки: 400') {
          setMessage('Переданы не корректные данные для авторизации');
        }
        if (err === 'код ошибки: 500') {
          setMessage('На сервере произошла ошибка.');
        } else {
          setMessage(
            'При авторизации произошла ошибка. Токен не передан или передан не в том формате.'
          );
        }
      })
  }

  //Регистрация нового пользователя
  function handleRegisterSubmit(email, password, name) {
    auth
      .register(email, password, name)
      .then((res) => {
        if (res) {
          setIsError(false)
          setMessage('')
          setIsLoggedIn(false)
          handleLoginSubmit(email, password)
        }
      })
      .catch((error) => {
        setIsError(true)
        console.error(`ошибка: ${error}`);
        if (error === 'код ошибки: 409') {
          setMessage('Пользователь с таким email уже существует');
        } else {
          setMessage('При регистрации пользователя произошла ошибка.');
        }
      });
  }

  //Изменение данных пользователя
  function handleUpdateUser(name, email) {
    mainApi
      .setUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res)
        setMessage('Данные успешно обновлены');
        setEdit(false);
      })
      .catch((error) => {
        console.error(`ошибка: ${error}`);
        if (error === 'код ошибки: 409') {
          setMessage('Пользователь с таким email уже существует');
        } else {
          setMessage('При обновлении профиля произошла ошибка')
        }
      });
  }

  // Выход пользователия из аккаунта
  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.clear()
    setIsLoggedIn(false);
    navigate('/');
    setMessage('')
  }

  // Удаление фильма из сохраненных фильмов
  function removeFromSavedMovies(deletemovieId) {
    mainApi
      .deleteMovie(deletemovieId, jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => { return movie._id !== deletemovieId }))
      })
      .catch((err) => console.log(err));
  }

  function addToSavedMovies(data) {
    const isAdded = savedMovies.some((element) => data.id === element.movieId);
    if (isAdded) {
      const movieToRemove = savedMovies.find((movie) => movie.movieId === data.id);
      removeFromSavedMovies(movieToRemove._id);
    } else {
      mainApi
        .postMovie(data, jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="page"> 
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={
            <ProtectedRoute
              component={Movies}
              savedMovies={savedMovies}
              isLoggedIn={isLoggedIn}
              addMovie={addToSavedMovies}
              setIsError={setIsError}
              isError={isError}
              message={message}
              setMessage={setMessage}
            />}
          />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              component={SavedMovies}
              savedMovies={savedMovies}
              isLoggedIn={isLoggedIn}
              onClickRemove={removeFromSavedMovies}
              message={message}
              setIsError={setIsError}
              isError={isError}
            />}
          />
          <Route path='/profile' element={
            <ProtectedRoute
              component={Profile}
              isLoggedIn={isLoggedIn}
              signOut={handleSignOut}
              updateUser={handleUpdateUser}
              message={message}
              edit={edit}
              setEdit={setEdit} />
          } />
          <Route path='/signup' element={
            <Register
              onRegister={handleRegisterSubmit}
              isError={isError}
              setIsError={setIsError}
              message={message}
              setMessage={setMessage} />} />
          <Route path='/signin' element={
            <Login
              onLogin={handleLoginSubmit}
              message={message}
              setIsError={setIsError}
              setMessage={setMessage} />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;
