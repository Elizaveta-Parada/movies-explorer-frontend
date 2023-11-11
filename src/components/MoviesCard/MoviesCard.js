import { useLocation } from 'react-router-dom';
// import image from '../../images/card1.jpg'
import './MoviesCard.css';



function MoviesCard({movie}) {
    const pathname = useLocation().pathname

    function handleSave() {
        const saveButton = document.querySelector(".card__save");
        if (saveButton) {
            saveButton.classList.toggle('card__save-active');
        }
    }
    return (
        <article className="card">
            <img className="card__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
            <div className="card__group">
                <div className="card__container">
                    <h2 className="card__title">{movie.nameRU}</h2>
                    {pathname ==='/saved-movies' ? 
                    <button type="button" className="card__delete" aria-label="Удалить" />  :
                    <button type="button" className='card__save' onClick={handleSave}/>
                    }
                </div>
                <p className="card__time">1ч42м</p>
            </div>
        </article>
    )
}

export default MoviesCard;





