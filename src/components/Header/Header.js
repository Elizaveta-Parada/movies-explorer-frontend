import Logo from "../../images/logo.svg"
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import './Header.css'
import { Link, Route, Routes } from 'react-router-dom';



function Header() {
    return (
        <header className="header">
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="header__main">
                            <div className="header__contant">
                                <Link to="/">
                                    <img className="header__logo" src={Logo} alt="Логотип" />
                                </Link>
                                <nav className="header__container">
                                    <Link to="/signup" className="header__link">Регистрация</Link>
                                    <Link className="header__link header__link_btn" to="/signin">Войти</Link>
                                </nav>
                            </div>

                        </div>
                    </>} />
                <Route path="/signin" element={
                    <div className="header__login">
                        <Link to="/">
                            <img className="header__logo" src={Logo} alt="Логотип" />
                        </Link>
                        <p className="header__title">Рады видеть!</p>
                    </div>
                } />
                <Route path="/signup" element={
                    <div className="header__login">
                        <Link to="/">
                            <img className="header__logo" src={Logo} alt="Логотип" />
                        </Link>
                        <p className="header__title">Добро пожаловать!</p>
                    </div>
                } />
                <Route path="/profile" element={<HeaderMenu />} />
                <Route path="/movies" element={<HeaderMenu />} />
                <Route path="/saved-movies" element={<HeaderMenu />} />
            </Routes>
        </header>
    );
}

export default Header;