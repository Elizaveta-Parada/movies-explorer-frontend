import './SearchForm.css'

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form" method="post" name="search" noValidate>
                <div className="search__field">
                    <input type="text" placeholder="Фильм" className="search__input" name="movies" required />
                    <button type="submit" className="search__btn" title="Поиск">
                    </button>
                    <span className="search__err"></span>
                </div>
                <div className="search__container-checkbox">
                <input type="checkbox" className="search__checkbox" name="short" id="short"/>
                    <label htmlFor="short" className="search__checkbox-custom" />
                    <p htmlFor="short" className="search__short-films">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}



export default SearchForm;