import Logo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation";
import './HeaderAuth.css'

function HeaderAuth() {
    return (
        <header className="header__auth">
            <img className="header__auth-logo" src={Logo} alt="Логотип" />
            <div className="header__auth-contant">
                <Navigation />
            </div>

        </header>
    );
}

export default HeaderAuth;