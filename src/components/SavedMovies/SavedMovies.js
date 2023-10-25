import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'


function SavedMovies() {
    return (
        <main>
            <SearchForm />
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
                </ul>
            </section>
            <div className="movies-gap"></div>
        </main>
    );
}

export default SavedMovies