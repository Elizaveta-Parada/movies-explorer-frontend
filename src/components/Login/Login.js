import './Login.css'
// import Logo from '../../images/logo.svg'
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
        <main>
            <section className="login">
                    <form className="login__form">
                        <fieldset className='login__form-fieldset'>
                            <label className='login__form-text'>E-mail</label>
                            <input className="login__form-input"
                                name="email"
                                type="email"
                                placeholder="pochta@yandex.ru"
                                value={email || ""}
                                required
                                autoComplete="username"
                                onChange={handleChangeEmail}></input>
                            <label className='login__form-text'>Пароль</label>
                            <input className="login__form-input"
                                name="password"
                                type="password"
                                placeholder="пароль"
                                value={password || ""}
                                autoComplete="current-password"
                                required
                                onChange={handleChangePassword}></input>
                        </fieldset>
                        <div className="login__button">
                            <Link className='login__button-link' to='/movies'>Войти</Link>
                        </div>
                    </form>
            </section>
        </main>
    )
}

export default Login