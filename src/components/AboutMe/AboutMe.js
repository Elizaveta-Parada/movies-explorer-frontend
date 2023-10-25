import './AboutMe.css'
import aboutMePhoto from '..//../images/pic__COLOR_pic.png'

function AboutMe() {
    return (
        <section className='about-me' id='Студент'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__area'>
                <article className='about-me__info'>
                    <h3 className='about-me__info-title'>Виталий</h3>
                    <p className='about-me__info-subtitle'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__info-text'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
                        У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-&nbsp;разработке,
                        начал заниматься фриланс-&nbsp;заказами и ушёл с постоянной работы.
                    </p>
                </article>
                <a className='about-me__info-link' href='https://github.com/Elizaveta-Parada' target='_blank' rel="noopener noreferrer">Github</a>
                <img className='about-me__info-photo' src={aboutMePhoto}
                    alt="Фото автора" />
            </div>
        </section>
    )
}

export default AboutMe