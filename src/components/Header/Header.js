import Logo from "../../images/logo.svg"
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Логотип" />
            <div className="header__container">
            <Link to="/sign-up" className="header__link">Регистрация</Link>
            <button className="header__btn" type="button"><Link to="/sign-in" ></Link>Войти</button>
            </div>  
        </header>
    );
}

export default Header;