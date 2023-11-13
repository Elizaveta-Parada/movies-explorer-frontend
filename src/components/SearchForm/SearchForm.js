import { useEffect } from 'react';
import './SearchForm.css'
import useValidation from '../../hooks/useValidation';
import { useLocation } from 'react-router-dom';

function SearchForm({searchMovies, setIsError, movies, isCheck, changeShort, searchQuery}) {
    const { values, handleChange, resetForm } = useValidation();
    const pathname = useLocation().pathname

    function onSubmit(evt) {
        evt.preventDefault()
        if (evt.target.search.value) {
            searchMovies(evt.target.search.value)
        } else {
            // setIsError(true)
        }  
    }

    function handleChangeValues(e) {
        handleChange(e)
    }

    useEffect(() => {
        if ((pathname ==='/saved-movies')) {
            resetForm({ search: ''})
        } else {
            resetForm({search: searchQuery})
        }
        // setIsError(false)
    }, [searchQuery, resetForm, setIsError, pathname, movies])
    
    return (
        <section className="search">
            <form className="search__form" method="post" noValidate onSubmit={onSubmit}>
                <div className="search__field">
                    <input type="text" placeholder="Фильм" className="search__input" name="search"
                    value={values.search || ''} onChange={handleChangeValues} />
                    <button type="submit" className="search__btn" title="Поиск" onSubmit={onSubmit}>
                    </button>
                    <span className="search__err"></span>
                </div>
                <div className="search__container-checkbox">
                <input type="checkbox" className="search__checkbox" name="short" id="short" />
                    <label className={`search__checkbox-custom ${isCheck ? 'search__checkbox-custom_active' : ''}`} onClick={() => changeShort()} />
                    <p className="search__short-films">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}



export default SearchForm;