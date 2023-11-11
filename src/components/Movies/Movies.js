import { useCallback, useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import * as moviesApi from '../../utils/MoviesApi'
import './Movies.css'
import Button from '../Button/Button';

function Movies({ movies }) {
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchedMovie, setSearchMovie] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(false);

    const filter = useCallback((search, isCheck, movies) => {
        setSearchMovie(search)
        localStorage.setItem('movie', JSON.stringify(search))
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
                setServerError(false)
                filter(search, isCheck, res)
            })
            .catch(err => {
                serverError(true)
                console.log(`Щшибка при поиске фильмов ${err}`)

            })
            .finally(() => setIsLoading(false))
        } else {
            filter(search, isCheck, allMovies)
        }


    }

    useEffect(() => {
        if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
            const movies = JSON.parse(localStorage.allmovies)
            const search = JSON.parse(localStorage.movie)
            const isCheck = JSON.parse(localStorage.shorts)
            setServerError(false)
            setFilteredMovies(false)
            setSearchMovie(search)
            setIsCheck(isCheck)
            setAllMovies(movies)
            filter(search, isCheck, movies)
        }
    }, [filter])

    function changeShort() {
        if (isCheck) {
            setIsCheck(false)
            filter(searchedMovie, false, allMovies)
        } else {
            setIsCheck(true)
            filter(searchedMovie, true, allMovies)
        }
    }


    return (
        <main>
            <SearchForm 
            searchMovies={searchMovies} 
            changeShort={changeShort} />
            <MoviesCardList
                movies={filteredMovies}
                isLoading={isLoading}
                serverError={serverError}
            />
            <Button />
        </main>
    );
}

export default Movies