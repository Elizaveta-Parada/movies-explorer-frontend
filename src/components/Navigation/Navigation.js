import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

function Navigation() {
    const [nav, setNav] = useState(false)
    const pathname = useLocation().pathname


    return (
        <>
            <nav className={nav ? ["header__navigation header__navigation-active"].join(" ") : ["header__navigation"]}>
                <ul className="header__navigation-lists">
                    <li className="header__navigation-list_mobile">
                        <Link className={pathname === '/' ? "header__navigation-link_active" : "header__navigation-link" } to="/">
                            Главная
                        </Link>
                    </li>
                    <li className="header__navigation-list">
                        <Link className={pathname === '/movies' ? "header__navigation-link_active" : "header__navigation-link" } to="/movies">
                            Фильмы
                        </Link>
                    </li>
                    <li className="header__navigation-list">
                        <Link className={pathname === '/saved-movies' ? "header__navigation-link_active" : "header__navigation-link" } to="/saved-movies" >
                            Сохранённые фильмы
                        </Link>
                    </li>
                </ul>
                <button className="header__navigation-auth_btn" type='button'>
                    <Link className="header__navigation-link" to="/profile">Аккаунт</Link>
                </button>
            </nav>
            <div className='header__navigation-btn_mobile' onClick={() => setNav(!nav)}>
                {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={35} />}
            </div>
            <div className={nav ? ["header__navigation-shadow header__navigation-shadow_active"].join(" ") : ["header__navigation-shadow"]}></div>
        </>
    )
}

export default Navigation