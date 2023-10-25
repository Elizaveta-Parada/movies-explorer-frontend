import './AboutProject.css'

function AboutProject() {
    return (
        <section className='about' id='О&nbsp;проекте'>
            <h2 className='about__title'>О&nbsp;проекте</h2>
            <ul className='about__table'>
                <li className='about__table-cell'>
                    <h3 className='about__table-heading'>Дипломный проект включал 5 этапов</h3>
                    <p className='about__table-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности
                        и финальные доработки.
                    </p>
                </li>
                <li className='about__table-cell'>
                    <h3 className='about__table-heading'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about__table-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
                        чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <article className='about__items'>
                <div className='about__item'>
                    <h3 className='about__item-title'>1 неделя</h3>
                    <p className='about__item-subtitle'>Back-end</p>
                </div>
                <div className='about__item'>
                    <h3 className='about__item-title about__item-title_theme_grey'>4 недели</h3>
                    <p className='about__item-subtitle'>Front-end</p>
                </div>
            </article>
        </section>
    )
}

export default AboutProject