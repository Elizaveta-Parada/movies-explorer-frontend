import './Portfolio.css'
import Point from "..//../images/point.svg"

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__lists'>
                <li className='portfolio__list'>
                    <a className='portfolio__link' href='https://github.com/Elizaveta-Parada/russian-travel' target="_blank"
                        rel="noopener noreferrer">
                        <h3 className='portfolio__subtitle'>Статичный сайт</h3>
                        <img className='portfolio__image' src={Point} alt='стрелка' />
                    </a>
                </li>
                <li className='portfolio__list'>
                    <a className='portfolio__link' href='https://github.com/Elizaveta-Parada/mesto' target="_blank"
            rel="noopener noreferrer">
                        <h3 className='portfolio__subtitle'>Адаптивный сайт</h3>
                        <img className='portfolio__image' src={Point} alt='стрелка' />
                    </a>
                </li>
                <li className='portfolio__list'>
                    <a className='portfolio__link' href='https://elizaveta-parada.github.io/mesto-react/' target="_blank"
            rel="noopener noreferrer">
                        <h3 className='portfolio__subtitle'>Одностраничное приложение</h3>
                        <img className='portfolio__image' src={Point} alt='стрелка' />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio