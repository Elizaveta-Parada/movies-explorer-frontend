import CurrentUserContext from '../../contexts/CurrentUserContext';
import useValidation from '../../hooks/useValidation';
import { EMAIL_REGEX } from '../../utils/constants';
import './Login.css'
import { useContext, useEffect, useState } from 'react'

function Login({ onLogin, message, setIsError }) {
    const currentUser = useContext(CurrentUserContext);
    const [activeMessage, setActiveMessage] = useState('');
    const { values, handleChange, resetForm, errors, isValid, setIsValid } = useValidation();

    useEffect(() => {
        setIsError(false)
    }, [setIsError])

    function handleChangeValues(e) {
        handleChange(e)
        setActiveMessage('')
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values.email, values.password)
    }

    useEffect(() => {
        if (currentUser) {
            resetForm({}, true);
        }
    }, [currentUser, resetForm]);

    useEffect(() => {
        if (message) {
            setIsValid(false);
            setActiveMessage(message);
        }
    }, [message, setIsValid]);


    return (
        <main>
            <section className="login">
                <h1 className="header__title">Рады видеть!</h1>
                <form className="login__form" onSubmit={handleSubmit} noValidate>
                    <fieldset className='login__form-fieldset'>
                        <label className='login__form-text'>E-mail</label>
                        <input className="login__form-input"
                            name="email"
                            type="email"
                            placeholder="pochta@yandex.ru"
                            value={values.email || ""}
                            minLength="2"
                            pattern={EMAIL_REGEX}
                            required
                            autoComplete="username"
                            onChange={handleChangeValues}></input>
                        <span className="login__form-input_error">{errors.email || activeMessage || ''}</span>
                        <label className='login__form-text'>Пароль</label>
                        <input className="login__form-input"
                            name="password"
                            type="password"
                            placeholder="пароль"
                            value={values.password || ""}
                            autoComplete="current-password"
                            minLength="2"
                            required
                            onChange={handleChangeValues}></input>
                        <span className="login__form-input_error">{errors.password || ''}</span>
                    </fieldset>
                    <button className="login__btn"
                        type="submit"
                        onSubmit={handleSubmit}
                        disabled={!isValid}>Войти</button>
                </form>
            </section>
        </main>
    )
}

export default Login