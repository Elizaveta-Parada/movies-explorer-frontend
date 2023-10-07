import card1 from '../../images/card1.jpg'
// import card2 from '../../images/card2.jpg'
// import card3 from '../../images/card3.jpg'
// import card4 from '../../images/card4.jpg'

import './MoviesCard.css'


function MoviesCard() {
    return (
        <article className="card">
            <img className="card__image" src={card1} alt="#" />
            <div className="card__group">
                <div className="card__container">
                    <h2 className="card__title">33 слова о дизайне</h2>
                    <button type="button" className='card__btn' />
                </div>
                <p className="card__time">1ч42м</p>
            </div>
        </article>
    )
}

export default MoviesCard