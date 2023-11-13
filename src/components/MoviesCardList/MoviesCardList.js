import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMediumScreen,
  InitMoreMaxScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen,
  InitLessMaxScreen
} from '../../utils/constants'
// import moviesData from '../../utils/constants'

function MoviesCardList({ filteredMovies, savedMovies, isLoading, serverError, onClickRemove, addMovie }) {
  const pathname = useLocation().pathname;
  const [count, setCount] = useState('')
  const fact = filteredMovies.slice(0, count)

  function printMovies() {
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
      counter.init = InitLessMaxScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
      counter.init = InitSmallScreen
      counter.step = StepSmallScreen
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printMovies().init)
      function printMoviesResize() {
        if (window.innerWidth >= StepMaxScreen) {
          setCount(printMovies().init)
        }
        if (window.innerWidth < StepMaxScreen) {
          setCount(printMovies().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printMovies().init)
        }
        if (window.innerWidth < SmallScreen) {
          setCount(printMovies().init)
        }
      }
      window.addEventListener('resize', printMoviesResize)
      return () => window.removeEventListener('resize', printMoviesResize)
    }
  }, [pathname, filteredMovies])

  function clickMore() {
    setCount(count + printMovies().step)
  }

  return (
    <section className="movies">
      <ul className="movies__list">
        {isLoading ? <Preloader /> :
          (pathname === '/movies' && fact.lenght !== 0) ?
            fact.map((data, id) => {
              return (<MoviesCard
                data={data}
                key={id}
                savedMovies={savedMovies}
                addMovie={addMovie}
              />)
            }) : filteredMovies.lenght !== 0 ?
              filteredMovies.map((data, _id) => {
                return (<MoviesCard
                  data={data}
                  key={_id}
                  onClickRemove={onClickRemove}
                  addMovie={addMovie}
                />)
              }) : serverError ?
                <span>«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
                  Подождите немного и попробуйте ещё раз»</span>
                : <span>«Ничего не найдено»</span>
        }
      </ul>
      {pathname === '/movies' ? 
      <button type='button' 
      className={`movies__button ${count >= filteredMovies.lenght && 'movies__button_hidden'}`} 
      onClick={clickMore}>Ещё
      </button> : ''}
      
    </section>
  );
}

export default MoviesCardList;