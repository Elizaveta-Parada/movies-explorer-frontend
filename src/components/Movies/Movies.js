import { useCallback, useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import * as moviesApi from '../../utils/MoviesApi'
import './Movies.css'


function Movies({ savedMovies, addMovie, setIsError, isError, onClickRemove }) {
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(false);
    const [activeMessage, setActiveMessage] = useState('');

    const filter = useCallback((search, isCheck, movies) => {
        setSearchQuery(search)
        localStorage.setItem('search', JSON.stringify(search))
        localStorage.setItem('shorts', JSON.stringify(isCheck))
        localStorage.setItem('allmovies', JSON.stringify(movies))
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isCheck ? (searchName && movie.duration <= 40) : searchName
        }))
    }, [])

    function searchMovies(search) {
        if (allMovies.length === 0) {
            setIsLoading(true)
            moviesApi.getMovies()
                .then((res) => {
                    setAllMovies(res)
                    setIsCheck(false)
                    filter(search, isCheck, res)
                    setActiveMessage('')
                })
                .catch(err => {
                    console.log(`Oшибка при поиске фильмов ${err}`)
                    setServerError(true)
                    setActiveMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')


                })
                .finally(() => setIsLoading(false))
        } else {
            filter(search, isCheck, allMovies)
        }
    }

    useEffect(() => {
        if (localStorage.allmovies && localStorage.shorts && localStorage.search) {
            const movies = JSON.parse(localStorage.allmovies)
            const search = JSON.parse(localStorage.search)
            const isCheck = JSON.parse(localStorage.shorts)
            setServerError(false)
            setFilteredMovies(false)
            setSearchQuery(search)
            setIsCheck(isCheck)
            setAllMovies(movies)
            filter(search, isCheck, movies)
        }
    }, [filter])

    function changeShort() {
        if (isCheck) {
            setIsCheck(false)
            filter(searchQuery, false, allMovies)
        } else {
            setIsCheck(true)
            filter(searchQuery, true, allMovies)
        }
    }

    return (
        <main>
            <SearchForm
                searchMovies={searchMovies}
                changeShort={changeShort}
                isCheck={isCheck}
                setIsError={setIsError}
                searchQuery={searchQuery}
                isError={isError}
            />
            <MoviesCardList
                filteredMovies={filteredMovies}
                savedMovies={savedMovies}
                addMovie={addMovie}
                isLoading={isLoading}
                serverError={serverError}
                activeMessage={activeMessage}
                allMovies={allMovies}
                onClickRemove={onClickRemove}
            />
        </main>
    );
}

export default Movies