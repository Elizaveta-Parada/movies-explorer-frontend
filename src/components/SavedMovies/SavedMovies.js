import Footer from "../Footer/Footer";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'


function SavedMovies() {
    return (
        <>
            <HeaderAuth />
            <SearchForm />
            <section className="saved__movies">
                <section className="movies__card-list">
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
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies