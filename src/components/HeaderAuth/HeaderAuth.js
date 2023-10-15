import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation";
import './HeaderAuth.css'

function HeaderAuth() {
    return (
        <header className="header-auth">
            <Link to="/">
                <img className="header-auth__logo" src={Logo} alt="Логотип" />
            </Link>
            <div>
                <Navigation />
            </div>
            <button className="header-auth__btn" type='button'>
                    <Link className="header-auth__link" to="/profile">Аккаунт</Link>
            </button>
        </header>
    );
}

export default HeaderAuth;