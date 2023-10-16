import Footer from '../Footer/Footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css'

function Movies() {

    return (
        <>
            <HeaderMenu />
            <main>
                <SearchForm />
                <MoviesCardList />
                <Preloader />
            </main>
            <Footer />
        </>
    );
}

export default Movies