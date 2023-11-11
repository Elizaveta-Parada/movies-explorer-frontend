import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation";
import './HeaderMenu.css'

function HeaderMenu() {
    return (
        <div className="menu">
            <Link to="/">
                <img className="menu__logo" src={Logo} alt="Логотип" />
            </Link>
            <div>
                <Navigation />
            </div>
            <Link className="menu__btn" to="/profile">Аккаунт</Link>
        </div>
    );
}

export default HeaderMenu;