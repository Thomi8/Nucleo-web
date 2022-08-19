const NavBar = () => {
    return (
        <div>
            <h1 className="main-header__title">NÚCLEO</h1>
                <nav className="main-nav" id="main-nav">
                    <ul className="menu">
                        <li className="menu__item"><a href="index.html" className="menu__link">HOME</a></li>
                        <li className="menu__item"><a href="./html/mercado.html" className="menu__link">MERCADO</a></li>
                        <li className="menu__item"><a href="./html/contacto.html" className="menu__link">CONTACTO</a></li>
                    </ul>
                </nav>
        </div>
    )
}
export default NavBar;