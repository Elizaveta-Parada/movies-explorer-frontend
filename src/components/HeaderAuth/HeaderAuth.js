import Logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation";
import './HeaderAuth.css'

function HeaderAuth() {
    return (
        <header className="header__auth">
            <img className="header__logo" src={Logo} alt="Логотип" />
            <Navigation />
        </header>
    );
}

export default HeaderAuth;