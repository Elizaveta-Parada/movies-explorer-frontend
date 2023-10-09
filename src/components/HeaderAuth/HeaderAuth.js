import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation";
import './HeaderAuth.css'

function HeaderAuth() {
    return (
        <header className="header__auth">
            <Link to="/">
                <img className="header__auth header__auth-logo" src={Logo} alt="Логотип" />
            </Link>
            <div className="header__auth header__auth-content">
                <Navigation />
            </div>
        </header>
    );
}

export default HeaderAuth;