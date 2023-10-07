import './AboutProject.css'

function AboutProject() {
    return (
        <section className='about-project' id = "О проекте">
            <h1 className='about-project__title'>О проекте</h1>
            <ul className='table'>
                <li className='table__cell'>
                    <h2 className='table__heading'>Дипломный проект включал 5 этапов</h2>
                    <p className='table__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности
                        и финальные доработки.
                    </p>
                </li>
                <li className='table__cell'>
                    <h2 className='table__heading'>На выполнение диплома ушло 5 недель</h2>
                    <p className='table__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
                        чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <article className='grid__items'>
                <div className='grid__item'>
                    <h2 className='grid__item-title' id='left'>1 неделя</h2>
                    <p className='grid__item-subtitle'>Back-end</p>
                </div>
                <div className='grid__item'>
                    <h2 className='grid__item-title' id='rigth'>4 недели</h2>
                    <p className='grid__item-subtitle'>Front-end</p>
                </div>
            </article>

        </section>

    )
}

export default AboutProject