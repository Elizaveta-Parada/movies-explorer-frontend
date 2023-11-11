import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import moviesData from '../../utils/constants'

function MoviesCardList({movies}) {
  return (
    <section className="movies">
      <ul className="movies__list">
      {movies.map((movie, i) => {
        return (<MoviesCard movie={movie} key={i}/>)})
      }
      </ul>
    </section>
  );
}

export default MoviesCardList;