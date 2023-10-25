import { Link, Route, Routes } from 'react-router-dom';
import './Footer.css'

function Footer() {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className="footer">
            <Routes>
                <Route path='/' element={
                    <div className='footer__main'>
                        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                        <div className='footer__container'>
                            <p className="footer__copyright">&#169; {year}</p>
                            <div className='footer__content'>
                                <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
                                <a className='footer__link' href='https://github.com/Elizaveta-Parada' target='_blank' rel="noreferrer">Github</a>
                            </div>
                        </div>
                    </div>
                } />
                <Route path='/signin' element={
                    <p className='footer__text'>
                    Ещё не зарегистрированы?
                    <Link className='footer__link footer__link_login' to='/signup'>Регистрация</Link>
                </p>
                } />
                <Route path='/signup' element={
                    <p className='footer__text'>
                    Уже зарегистрированы?
                    <Link className='footer__link footer__link_login' to='/signin'>Войти</Link>
                </p>
                } />
                <Route path='/profile' element={null}/>
                <Route path='/movies' element={
                    <div className='footer__main'>
                        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                        <div className='footer__container'>
                            <p className="footer__copyright">&#169; {year}</p>
                            <div className='footer__content'>
                                <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
                                <a className='footer__link' href='https://github.com/Elizaveta-Parada' target='_blank' rel="noreferrer">Github</a>
                            </div>
                        </div>
                    </div>
                } />
                <Route path='/saved-movies' element={
                    <div className='footer__main'>
                        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                        <div className='footer__container'>
                            <p className="footer__copyright">&#169; {year}</p>
                            <div className='footer__content'>
                                <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
                                <a className='footer__link' href='https://github.com/Elizaveta-Parada' target='_blank' rel="noreferrer">Github</a>
                            </div>
                        </div>
                    </div>
                } />
            </Routes>
        </footer>
    );
}

export default Footer;