import CardWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <> 
            <div>
                <div className="main-header__container">
                <h1 className="main-header__title">NÚCLEO</h1>
                    <span className="icon-menu" id="btn-menu"><i class="fas fa-bars"></i></span>
                    <nav className="main-nav" id="main-nav">
                        <ul className="menu">
                        <li className="menu__item">
                            <Link to='/'><p className="menu__link">HOME</p></Link>
                            <Link to='category/Hombre'><p className="menu__link">HOMBRE</p></Link>
                            <Link to='category/Mujer'><p className="menu__link">MUJER</p></Link>
                        </li> 
                        </ul>
                    </nav>
                </div>
                <CardWidget />
            </div>
        </>
    )
}

export default NavBar;

