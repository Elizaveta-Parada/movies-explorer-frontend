import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

function Navigation(isLoggedIn) {
    const [nav, setNav] = useState(false)
    const pathname = useLocation().pathname


    return (
        <>
            <nav className={nav ? ["menu__nav menu__nav_active"].join(" ") : ['menu__nav']}>
                <ul className="menu__lists">
                    <li className="menu__mobile">
                        <Link className={pathname === '/' ? "menu__link-active" : "menu__link"} to="/">
                            Главная
                        </Link>
                    </li>
                    <li className="menu__list">
                        <Link className={pathname === '/movies' ? "menu__link-active" : [isLoggedIn && pathname === '/' ?  'menu__link-auth' : "menu__link"]} to="/movies">
                            Фильмы
                        </Link>
                    </li>
                    <li className="menu__list">
                        <Link className={pathname === '/saved-movies' ? "menu__link-active" : [isLoggedIn && pathname === '/' ? 'menu__link-auth' : "menu__link"]} to="/saved-movies" >
                            Сохранённые фильмы
                        </Link>
                    </li>
                </ul>
                <Link className="menu__link menu__link_btn" to="/profile">Аккаунт</Link>
            </nav>
            <div className='menu__btn-mobile' onClick={() => setNav(!nav)}>
                {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={35} />}
            </div>
            <div className={nav ? ["menu-shadow menu-shadow_active"].join(" ") : ["menu-shadow"]}></div>
        </>
    )
}

export default Navigation