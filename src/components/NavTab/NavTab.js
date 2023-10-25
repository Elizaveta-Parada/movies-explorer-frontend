import './NavTab.css'

function NavTab() {
    return (
        <nav className='navtab'>
            <ul className='navtab__links'>
                <li>
                    <a className='navtab__link' href='#О&nbsp;проекте'>О&nbsp;проекте</a>
                </li>
                <li>
                    <a className='navtab__link' href='#Технологии'>Технологии</a>
                </li>
                <li>
                    <a className='navtab__link' href='#Студент'>Студент</a>
                </li>
            </ul>
        </nav>

    )
}

export default NavTab;