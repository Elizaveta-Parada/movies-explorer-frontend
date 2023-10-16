import Footer from "../Footer/Footer";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'


function SavedMovies() {
    return (
        <>
            <HeaderMenu />
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
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies