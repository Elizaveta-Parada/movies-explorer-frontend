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

function MoviesCardList({ filteredMovies, savedMovies, isLoading, serverError, onClickRemove, addMovie, activeMessage }) {
  const pathname = useLocation().pathname;
  const [count, setCount] = useState(InitMoreMaxScreen)
  const fact = filteredMovies.slice(0, count)
  const [notFound, setNotFound] = useState(false)
  const [message, setMessage] = useState('')

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

  useEffect(() => {
    if (fact.length !== 0 && filteredMovies.length !== 0) {
      setNotFound(false);
      setMessage('')
    } else {
      setMessage('Ничего не найдено')
      setNotFound(true)
    }
  }, [fact, filteredMovies.length]);


  return (
    <section className="movies">
      <span className={`movies__err ${!serverError ? 'block__hide' : ''}`}>{activeMessage}</span>
      <span className={`movies__err ${!notFound ? 'block__hide' : ''}`}>{message}</span>
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
            }) :
            (filteredMovies.lenght !== 0) ?
              filteredMovies.map((data, _id) => {
                return (<MoviesCard
                  data={data}
                  key={_id}
                  onClickRemove={onClickRemove}
                  addMovie={addMovie}
                />)
              }) :
              (null)
        }
      </ul>
      {pathname === '/movies' && count < filteredMovies.length ?
        <button type='button'
          className={`movies__button 'movies__button_hidden'}`}
          onClick={clickMore}>Ещё
        </button> : ''}
    </section>
  );
}

export default MoviesCardList;