import './Login.css'
import Logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function resetForm() {
        setEmail("");
        setPassword("")
    }

    useEffect(() => {
        resetForm()
   }, []);

    return (
        <section className="login">
            <div className='login__container'>
                <Link to="/">
                <img className="login__logo" src={Logo} alt="Логотип" />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form">
                    <label className='login__form-text'>E-mail</label>
                    <input className="login__form-input" 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    value={email || ""} 
                    required 
                    autoComplete="username"
                    onChange={handleChangeEmail}></input>
                    <label className='login__form-text'>Пароль</label>
                    <input className="login__form-input" 
                    name="password" 
                    type="password" 
                    placeholder="Пароль" 
                    value={password || ""} 
                    required 
                    autoComplete="curren-password"
                    onChange={handleChangePassword}></input>
                    <button className="login__button" type="submit" >
                        <Link className='login__button-link' to='/movies'>Войти</Link></button>
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