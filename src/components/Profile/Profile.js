import { Link } from 'react-router-dom'
import './Profile.css'
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { EMAIL_REGEX } from '../../utils/constants';
import useValidation from '../../hooks/useValidation';

function Profile({ signOut, updateUser, message, edit, setEdit }) {
    const currentUser = useContext(CurrentUserContext);
    const [activeMessage, setActiveMessage] = useState('');
    const { values, handleChange, resetForm, errors, isValid } = useValidation();

    function handleChangeValues(e) {
        handleChange(e)
        setActiveMessage('')
    }

    function handleEditProfile() {
        setActiveMessage('')
        setEdit(true)
    }

    function handleSubmit(e) {
        e.preventDefault();
        updateUser(values.name, values.email);
        setActiveMessage(message)

    }

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser, {}, true);
        }
    }, [currentUser, resetForm]);

    useEffect(() => {
        setActiveMessage(message);
    }, [message]);

    const noValid = !isValid || (currentUser.name === values.name && currentUser.email === values.email);

    return (
        <>
            <main className='main' >
                <section className='profile'>
                    <h2 className='profile__title'>{`Привет, ${currentUser.name || ''}!`}</h2>
                    <form className="profile__form" onSubmit={handleSubmit} noValidate>
                        <div className='profile__container'>
                            <div className='profile__block'>
                                <label className='profile__form-text'>Имя</label>
                                <input className="profile__form-input"
                                    name="name"
                                    type="text"
                                    placeholder="Виталий"
                                    minLength="2"
                                    maxLength="30"
                                    pattern="[а-яА-Яa-zA-ZёË0-9\- ]{1,}"
                                    required
                                    disabled={!edit}
                                    value={values.name || ''}
                                    onChange={handleChangeValues}>
                                </input>
                            </div>
                            <span className="profile__error">{errors.name || ''}</span>
                        </div>
                        <div className='profile__container'>
                            <div className='profile__block'>
                                <label className='profile__form-text'>E-mail</label>
                                <input className="profile__form-input"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    pattern={EMAIL_REGEX}
                                    required
                                    disabled={!edit}
                                    value={values.email || ''}
                                    onChange={handleChangeValues}>
                                </input>
                            </div>
                            <span className="profile__error">{errors.email || ''}</span>
                        </div>
                        <div className='profile__button'>
                            <span
                                className={`profile__massege ${edit ? 'block__hide' : 'profile__error'
                                    }`}
                            >
                                {activeMessage}
                            </span>
                            {edit ? (
                                <>
                                    <button
                                        className="profile__button-edt"
                                        type="submit"
                                        onSubmit={handleSubmit}
                                        disabled={noValid || activeMessage}>Сохранить</button>
                                </>
                            ) : (
                                <>
                                    <button className='profile__button-submit' type="submit" onClick={handleEditProfile} >Редактировать</button>
                                    <Link className='profile__link' to='/signup' onClick={signOut}>Выйти из аккаунта</Link>
                                </>
                            )}
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Profile