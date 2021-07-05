import { link, useState } from 'react'
import Button from '../Button'
import { MenuItems } from './MenuItems'
import './Navbar.scss'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <nav className="NavbarItems">

            <h1 className="navbar-logo">
                spaceworld
                <i class="fas fa-space-shuttle"></i>
            </h1>

            <div className="menu-icon" onClick={() => handleClick()}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => (
                    <li key={index} >
                        <a className={item.cName} href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
            <Button>Sign Up</Button>
        </nav>
    )
}

export default Navbar;
