import Logo from "../../images/logo.svg"
import './Header.css'
import { Link } from 'react-router-dom';



function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Логотип" />
            <div className="header__container">
                <Link to="/signup" className="header__link">Регистрация</Link>
                <button className="header__btn" type="submit">
                    <Link className="header__btn-link" to="/signin" >Войти</Link>
                </button>
            </div>
        </header>
    );
}

export default Header;