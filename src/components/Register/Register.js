import CurrentUserContext from '../../contexts/CurrentUserContext';
import useValidation from '../../hooks/useValidation';
import { EMAIL_REGEX } from '../../utils/constants';
import './Register.css'
import { useContext, useEffect, useState } from 'react';


function Register({ onRegister, message, setIsError, setMessage }) {
    const currentUser = useContext(CurrentUserContext);
    const [activeMessage, setActiveMessage] = useState('');
    const { values, handleChange, resetForm, errors, isValid, setIsValid } = useValidation();

    useEffect(() => {
        setIsError(false)
        setActiveMessage('')
        setMessage('')
        resetForm({}, true);
    }, [resetForm, setIsError, setMessage])


    function handleChangeValues(e) {
        handleChange(e)
        setActiveMessage('')
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(values.email, values.password, values.name);
        setActiveMessage(message)
    }

    useEffect(() => {
        if (currentUser) {
            resetForm({}, true);
            setIsError(false)
            setActiveMessage('')
            setMessage('')
        }
    }, [currentUser, resetForm, setIsError, setMessage]);

    useEffect(() => {
        if (message) {
            setIsValid(false);
            setActiveMessage(message);
        }
    }, [message, setIsValid]);

    return (
        <main>
            <section className="login">
                <form className="login__form" onSubmit={handleSubmit} noValidate>
                    <label className='login__form-text'>Имя</label>
                    <input className="login__form-input"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        value={values.name || ""}
                        pattern="[а-яА-Яa-zA-ZёË0-9\- ]{1,}"
                        required
                        minLength='2'
                        maxLength='30'
                        onChange={handleChangeValues}
                        autoComplete="name"
                    ></input>
                    <span className="login__form-input_error">{errors.name || ''}</span>
                    <label className='login__form-text'>E-mail</label>
                    <input className="login__form-input"
                        name="email"
                        type="email"
                        placeholder="почта"
                        value={values.email || ""}
                        minLength="2"
                        pattern={EMAIL_REGEX}
                        required
                        autoComplete="username"
                        onChange={handleChangeValues}
                    ></input>
                    <span className="login__form-input_error">{errors.email || activeMessage || ''}</span>
                    <label className='login__form-text'>Пароль</label>
                    <input className="login__form-input"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        value={values.password || ""}
                        minLength="2"
                        required
                        onChange={handleChangeValues}
                        autoComplete="current-password"
                    ></input>
                    <span className="login__form-input_error">{errors.password || ''}</span>
                    <button className="login__btn" type="submit" onSubmit={handleSubmit}
                        disabled={!isValid}>Зарегистрироваться</button>
                </form>
            </section>
        </main>
    )
}

export default Register