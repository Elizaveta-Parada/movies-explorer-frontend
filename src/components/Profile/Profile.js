import { Link } from 'react-router-dom'
import HeaderAuth from '../HeaderAuth/HeaderAuth'
import './Profile.css'

function Profile() {
    return (
        <>
            <HeaderAuth />
            <section className='profile'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form className="profile__form">
                    <div className='profile__container'>
                        <label className='profile__form-text'>E-mail</label>
                        <input className="profile__form-input" name="email" type="email" placeholder="Email"
                            value="email" required autoComplete="username"></input>
                    </div>
                    <div className='profile__container'>
                        <label className='profile__form-text'>Пароль</label>
                        <input className="profile__form-input" name="password" type="password" placeholder="Пароль"
                            value="password" required autoComplete="curren-password"></input>
                    </div>
                    <button className="profile__button" type="submit">Редактировать</button>
                    <Link className='profile__link' to='/signup'>Выйти из аккаунта</Link>
                </form>
            </section>
        </>
    )
}

export default Profile