import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation";
import './HeaderMenu.css'

function HeaderMenu() {
    return (
        <header className="menu">
            <Link to="/">
                <img className="menu__logo" src={Logo} alt="Логотип" />
            </Link>
            <div>
                <Navigation />
            </div>
            <button className="menu__btn" type='button'>
                <Link className="menu__link" to="/profile">Аккаунт</Link>
            </button>
        </header>
    );
}

export default HeaderMenu;