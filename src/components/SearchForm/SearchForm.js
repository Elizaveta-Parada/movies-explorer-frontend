import { useEffect, useState } from 'react';
import './SearchForm.css'
import useValidation from '../../hooks/useValidation';
import { useLocation } from 'react-router-dom';

function SearchForm({ searchMovies, setIsError, isError, movies, isCheck, changeShort, searchQuery, savedMovies }) {
    const { values, handleChange, resetForm } = useValidation();
    const [activeMessage, setActiveMessage] = useState('');
    const pathname = useLocation().pathname

    function onSubmit(evt) {
        evt.preventDefault()
        if (evt.target.search.value) {
            searchMovies(evt.target.search.value)
            setIsError(false)
            setActiveMessage('')
        } else {
            setIsError(true)
            setActiveMessage('Нужно ввести ключевое слово')
        }
    }

    function handleChangeValues(e) {
        handleChange(e)
        setActiveMessage('')

    }

    useEffect(() => {
        if ((pathname === '/saved-movies' && savedMovies.lenght === 0)) {
            resetForm({ search: '' })
            setActiveMessage('')
        } else {
            resetForm({ search: searchQuery })
        }
        setIsError(false)
    }, [searchQuery, resetForm, setIsError, pathname, movies, savedMovies])

    return (
        <section className="search">
            <form className="search__form" method="post" noValidate onSubmit={onSubmit}>
                <div className="search__field">
                    <input type="text" placeholder="Фильм" className="search__input" name="search"
                        value={values.search || ''} onChange={handleChangeValues} />
                    <button type="submit" className="search__btn" title="Поиск" onSubmit={onSubmit}>
                    </button>
                </div>
                <span className={`search__err ${!isError ? 'block__hide' : ''}`}>{activeMessage}</span>
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