import './Register.css'
import { useState } from 'react';


function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <main>
            <section className="login">
                    <form className="login__form">
                        <label className='login__form-text'>Имя</label>
                        <input className="login__form-input"
                            name="Имя"
                            type="text"
                            placeholder="Виталий"
                            value={name || ""}
                            required
                            minLength='2'
                            maxLength='30'
                            onChange={handleChangeName}
                            autoComplete="username"
                        ></input>
                        <label className='login__form-text'>E-mail</label>
                        <input className="login__form-input"
                            name="email"
                            type="email"
                            placeholder="pochta@yandex.ru"
                            value={email || ""}
                            required
                            autoComplete="username"
                            onChange={handleChangeEmail}
                        ></input>
                        <label className='login__form-text'>Пароль</label>
                        <input className="login__form-input"
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            value={password || ""}
                            required
                            onChange={handleChangePassword}
                        ></input>
                        <span className='login__massege'>Что-то пошло не так...</span>
                        <button className="login__btn" type="submit" >Зарегистрироваться</button>
                    </form>
            </section>
        </main>
    )
}

export default Register