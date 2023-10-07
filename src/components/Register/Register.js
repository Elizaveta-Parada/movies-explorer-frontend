import { Link } from 'react-router-dom'
import './Register.css'
import Logo from '../../images/logo.svg'


function Register() {
    return (
        <section className="login">
            <div className='login__container'>
                <img className="login__logo" src={Logo} alt="Логотип" />
                <h2 className="login__title">Добро пожаловать!</h2>
                <form className="login__form">
                <label className='login__form-text'>Имя</label>
                    <input className="login__form-input" name="Имя" type="text" placeholder="Имя" value="Имя" 
                    required minLength='2' maxLength='30'></input>
                    <label className='login__form-text'>E-mail</label>
                    <input className="login__form-input" name="email" type="email" placeholder="Email" 
                    value="email" required autoComplete="username"></input>
                    <label className='login__form-text'>Пароль</label>
                    <input className="login__form-input" name="password" type="password" placeholder="Пароль" 
                    value="password" required autoComplete="curren-password"></input>
                    <span className='login__massege'>Что-то пошло не так...</span>
                    <button className="login__button" type="submit" >Зарегистрироваться</button>
                    <p className='login__text'>
                    Уже зарегистрированы?
                        <Link className='login__link' to='/signin'>Войти</Link>
                    </p>
                </form>
            </div>

        </section>
    )
}

export default Register