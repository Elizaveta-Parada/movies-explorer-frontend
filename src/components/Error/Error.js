import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
  return (
    <main>
      <section className='error'>
        <div className='error__container'>
          <h1 className='error__title'>404</h1>
          <p className='error__text'>Страница не найдена</p>
          <Link className='error__link' to='/'>Назад</Link>
        </div>
      </section>
    </main>
  )
}

export default Error;