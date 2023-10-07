import Footer from '../Footer/Footer';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css'

function Movies() {
    return (
        <>
            <HeaderAuth />
            <SearchForm />
            <section className="movies">
                <MoviesCardList />
            </section>
            <Preloader />
            <Footer />
        </>
    );
}

export default Movies