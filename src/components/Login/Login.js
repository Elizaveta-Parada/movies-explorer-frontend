import './Login.css'
import Logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <section className="login">
            <div className='login__container'>
                <img className="login__logo" src={Logo} alt="Логотип" />
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form">
                    <label className='login__form-text'>E-mail</label>
                    <input className="login__form-input" name="email" type="email" placeholder="Email" value="pochta@yandex.ru" required autoComplete="username"></input>
                    <label className='login__form-text'>Пароль</label>
                    <input className="login__form-input" name="password" type="password" placeholder="Пароль" value="password" required autoComplete="curren-password"></input>
                    <button className="login__button" type="submit" >Войти</button>
                    <p className='login__text'>
                        Ещё не зарегистрированы?
                        <Link className='login__link' to='/signup'>Регистрация</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Login