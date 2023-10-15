import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Profile from '../Profile/Profile';



function App() {
  
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Main />} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/saved-movies/*' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App;
