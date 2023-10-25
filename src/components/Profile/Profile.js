import { Link } from 'react-router-dom'
import './Profile.css'
import { useState } from 'react';

function Profile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [editProfile, setEditProfile] = useState(true)

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleEditProfile() {
        setEditProfile(false)
    }
    return (
        <>
            <main className='main' >
                <section className='profile'>
                    <h2 className='profile__title'>Привет, Виталий!</h2>
                    <form className="profile__form">
                        <div className='profile__container'>
                            <label className='profile__form-text'>Имя</label>
                            <input className="profile__form-input"
                                name="text"
                                type="text"
                                placeholder="Виталий"
                                required
                                value={name || ''}
                                onChange={handleChangeName}></input>
                        </div>
                        <div className='profile__container'>
                            <label className='profile__form-text'>E-mail</label>
                            <input className="profile__form-input"
                                name="email"
                                type="email"
                                placeholder="email"
                                required
                                value={email || ''}
                                onChange={handleChangeEmail}></input>
                        </div>
                        {!editProfile ? (
                            <button className="profile__button-edt" type="submit">Сохранить</button>
                        ) : (
                            <><button className="profile__button" type="submit" onClick={handleEditProfile} >Редактировать</button>
                                <Link className='profile__link' to='/signup'>Выйти из аккаунта</Link></>
                        )}
                    </form>
                </section>
            </main>
        </>
    )
}

export default Profile