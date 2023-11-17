import CurrentUserContext from '../../contexts/CurrentUserContext';
import useValidation from '../../hooks/useValidation';
import { EMAIL_REGEX } from '../../utils/constants';
import './Login.css'
import { useContext, useEffect, useState } from 'react'

function Login({ onLogin, message, setIsError, setMessage, isError, isSend}) {
    const currentUser = useContext(CurrentUserContext);
    const [activeMessageLogin, setActiveMessageLogin] = useState('');
    const { values, handleChange, resetForm, errors, isValid, setIsValid } = useValidation();

    useEffect(() => {
        setIsError(false)
        setActiveMessageLogin('')
        setMessage('')
        resetForm({}, true);
    }, [resetForm, setIsError, setMessage])

    function handleChangeValues(e) {
        handleChange(e)
        setActiveMessageLogin('')
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values.email, values.password)
        setActiveMessageLogin(message)
        setMessage('')
    }

    useEffect(() => {
        if (currentUser) {
            resetForm({}, true);
            setIsError(false)
            setActiveMessageLogin('')
            setMessage('')
        }
    }, [currentUser, resetForm, setIsError, setMessage]);

    useEffect(() => {
        if (message) {
            setIsValid(false);
            setActiveMessageLogin(message);
        } else {
            setActiveMessageLogin('')
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
                        <span className="login__form-input_error">{errors.email || ''}</span>
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
                    <span className='login__error'>{activeMessageLogin}</span>
                    <button className="login__btn"
                        type="submit"
                        disabled={!isValid || isError || isSend}>Войти</button>
                </form>
            </section>
        </main>
    )
}

export default Login