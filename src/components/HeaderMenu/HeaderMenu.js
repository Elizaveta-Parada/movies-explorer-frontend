import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation";
import './HeaderMenu.css'

function HeaderMenu({isLoggedIn}) {
    const pathname = useLocation().pathname;
    return (
        <div className={isLoggedIn || pathname !== '/' || pathname === '/profile' ? "menu " : 'menu__auth'}>
            <Link to="/">
                <img className="menu__logo" src={Logo} alt="Логотип" />
            </Link>
            <div>
                <Navigation isLoggedIn={isLoggedIn}/>
            </div>
            <Link className="menu__btn" to="/profile">Аккаунт</Link>
        </div>
    );
}

export default HeaderMenu;