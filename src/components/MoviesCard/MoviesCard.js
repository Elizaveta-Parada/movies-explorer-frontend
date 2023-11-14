import { Link, useLocation } from 'react-router-dom';
// import image from '../../images/card1.jpg'
import './MoviesCard.css';
import { useEffect, useState } from 'react';



function MoviesCard({ data, addMovie, savedMovies, onClickRemove }) {
    const pathname = useLocation().pathname
    const [click, setClick] = useState(false)

    function timeToHour(time) {
        const hours = Math.floor(time / 60);
        let minutes = Math.floor(time % 60);
        const newTime = `${hours === 0 ? '' : `${hours}ч`} ${minutes < 10 ? '0' : ''
            }${minutes}мин`;
        return newTime;
    }

    useEffect(() => {
        setClick(savedMovies && savedMovies.some((element) => data.id === element.movieId));
    }, [savedMovies, data.id]);

    function handleSave() {
        if (pathname === '/saved-movies') {
            onClickRemove(data._id);
        } else {
            if (click) {
                onClickRemove(data._id);
            } else {
                addMovie(data);
            }
        }
    }

    return (
        <article className="card">
            <Link to={data.trailerLink} target='_blank' className="card__image">
                <img className='card__image-src'
                src={pathname === '/movies' ? `https://api.nomoreparties.co/${data.image.url}`
                    : data.image} alt={data.nameRU} />
            </Link>
            <div className="card__group">
                <div className="card__container">
                    <h2 className="card__title">{data.nameRU}</h2>
                    {pathname === '/movies' ?
                        <button type="button" className={`card__save ${click ? 'card__save-active' : ''}`} onClick={handleSave} />
                        :
                        <button type="button" className="card__delete" aria-label="Удалить" onClick={() => onClickRemove(data._id)} />
                    }
                </div>
                <p className="card__time">{timeToHour(data.duration)}</p>
            </div>
        </article>
    )
}

export default MoviesCard;





