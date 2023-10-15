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
            <main>
                <SearchForm />
                <MoviesCardList/>
                <Preloader />
            </main>
            <Footer />
        </>
    );
}

export default Movies