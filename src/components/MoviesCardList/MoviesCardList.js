import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies__list">
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