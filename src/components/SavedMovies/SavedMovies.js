import { useCallback, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function SavedMovies({ savedMovies, onClickRemove }) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies)
    const [searchQuery, setSearchQuery] = useState('');
    const [isCheck, setIsCheck] = useState(false)

    const filter = useCallback((search, isCheck, movies) => {
        setSearchQuery(search)
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isCheck ? (searchName && movie.duration <= 40) : searchName
        }))
    }, [])

    function searchMovies(search) {
        filter(search, isCheck, savedMovies)
    }

    function changeShort() {
        if (isCheck) {
            setIsCheck(false)
            filter(searchQuery, false, savedMovies)
        } else {
            setIsCheck(true)
            filter(searchQuery, true, savedMovies)
        }
    }

    useEffect(() => {
        filter(searchQuery, isCheck, savedMovies)
    }, [filter, isCheck, savedMovies, searchQuery])

    return (
        <main>
            <SearchForm 
            searchMovies={searchMovies}
            isCheck={isCheck}
            changeShort={changeShort}
            savedMovies={savedMovies}
            searchQuery={searchQuery}
            />
            <MoviesCardList
            onClickRemove={onClickRemove}
            filteredMovies={filteredMovies}
            />
            <div className="movies-gap"></div>
        </main>
    );
}

export default SavedMovies