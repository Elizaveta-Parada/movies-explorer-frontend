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
                    <p className='footer__subtitle'>Яндекс.Практикум</p>
                    <p className='footer__link'>Github</p>
                </div>
            </div>
        </footer>
    );
}
  
  export default Footer;