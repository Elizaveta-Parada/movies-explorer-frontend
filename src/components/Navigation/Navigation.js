import { Link } from 'react-router-dom'
import './Navigation.css'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

function Navigation() {
    const [nav, setNav] = useState(false)
    return (
        <>
            <nav className={nav ? ["navigation navigation_active"].join(" ") : ["navigation"]}>
                <ul className="navigation__lists">
                    <li className="navigation__list-mobile">
                        <Link className="navigation__link" to="/">
                            Главная
                        </Link>
                    </li>
                    <li className="navigation__list">
                        <Link className="navigation__link" to="/movies">
                            Фильмы
                        </Link>
                    </li>
                    <li className="navigation__list">
                        <Link className="navigation__link" to="/saved-movies">
                            Сохранённые фильмы
                        </Link>
                    </li>
                </ul>
                <button className="navigation__btn" type='button'>
                    <Link className="navigation__link" to="/profile">Аккаунт</Link>
                </button>
            </nav>
            <div className='navigation__btn-mobile' onClick={() => setNav(!nav)}>
                {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={44} />}
            </div>
            <div className={nav ? ["nav__shadow nav__shadow_active"].join(" ") : ["nav__shadow"]}></div>
        </>
    )
}

export default Navigation