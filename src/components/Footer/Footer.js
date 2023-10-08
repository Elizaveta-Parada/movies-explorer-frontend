import './Footer.css'

function Footer() {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className="footer">
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__container'>
                <p className="footer__copyright">&#169; {year}</p>
                <div className='footer__content'>
                    <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/Elizaveta-Parada' target='_blank' rel="noreferrer">Github</a>
                </div>
            </div>
        </footer>
    );
}
  
  export default Footer;