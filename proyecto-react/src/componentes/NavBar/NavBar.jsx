import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return (
        <header>
            <h1>Taboada Online </h1>
            <nav>
                <ul>
                    <li>Limpieza Hogar</li>
                    <li>Lavado Ropa</li>
                    <li>Limpieza Piletas</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar