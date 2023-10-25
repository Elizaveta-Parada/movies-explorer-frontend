import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import moviesData from '../../utils/constants'

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies__list">
      {/* {moviesData.map((movie, i) => {
        return (<MoviesCard movie={movie} key={i}/>)})
      } */}
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
            <li>
              <MoviesCard />
            </li>
      </ul>
    </section>
  );
}

export default MoviesCardList;