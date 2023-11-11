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
import Preloader from '../Preloader/Preloader'



function App() {
  const jwt = localStorage.getItem('jwt')
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({})
  const [movies, setMovies] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState('');
  const [edit, setEdit] = useState(false);
  const [isCheckToken, setIsCheckToken] = useState(true)

  // Получение данных пользователя и фильмов с сервера
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        mainApi.getUserInfo(jwt),
        mainApi.getMovies(jwt)
      ])
        .then(([dataUserInfo, dataMovie]) => {
          setCurrentUser(dataUserInfo)
          setMovies(dataMovie.reverse())
          setIsCheckToken(false)
        })
        .catch((error) => { console.log(`Ошибка при загрузке страницы ${error}`) })
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
        if (!res || res.status === 400) {
          setMessage("Неверное имя пользователя или пароль")
        };
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsLoggedIn(true);
          setMessage('')
          navigate('/movies')
        }
      })
      .catch((error) => {
        console.error(`ошибка: ${error}`);
        if (error === 401) { setMessage("Неверное имя пользователя или пароль")}
      })
  }

  function handleRegisterSubmit(email, password, name) {
    auth
      .register(email, password, name)
      .then((res) => {
        if (res) {
          setIsLoggedIn(false)
          handleLoginSubmit(email, password)
        }
      })
      .catch((error) => {
        console.error(`ошибка при регистрации ${error}`);
      })
  }

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
        if (error ===  409) {
          setMessage('Пользователь с таким email уже существует');
        } 
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/signin');
  }


  return (
    <div className="page">
      {isCheckToken ? <Preloader /> :
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={
              <ProtectedRoute
                component={Movies}
                movies={movies}
                isLoggedIn={isLoggedIn}
              />}
            />
            <Route path='/saved-movies' element={
              <ProtectedRoute
                component={SavedMovies}
                movies={movies}
                isLoggedIn={isLoggedIn} />} />
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
            <Route path='/signup' element={<Register onRegister={handleRegisterSubmit} />} />
            <Route path='/signin' element={<Login onLogin={handleLoginSubmit} message={message} />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </CurrentUserContext.Provider>
      }
    </div>
  )
}

export default App;
