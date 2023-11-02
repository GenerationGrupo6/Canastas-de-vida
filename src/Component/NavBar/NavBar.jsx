// Removed unused import
import './NavBar.css'
import Logo from '../assets/Logo-sin-fondo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <img
                id="Logo"
                src={Logo}
                alt="Logo"
                width="250px"
                height="80px"
            />
            <nav className="nav">
                <ul className="nav-list">
                <li>INICIO</li>
                <li>NOSOTROS</li>
                <li><Link to='/Page3'>NUESTRAS HISTORIAS</Link></li>
                <li>CONTACTANOS</li>
                <li>UNETE AL CAMBIO</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar