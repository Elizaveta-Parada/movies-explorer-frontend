import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css'

function Movies() {

    return (
            <main>
                <SearchForm />
                <MoviesCardList />
                <Preloader />
            </main>
    );
}

export default Movies