import Footer from '../Footer/Footer';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css'

function Movies() {
    return (
        <section className="movies">
            <HeaderAuth />
            <SearchForm />
            <MoviesCardList />
            <Preloader />
            <Footer />
        </section>
    );
}

export default Movies