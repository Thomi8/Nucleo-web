const NavBar = () => {
    return (
        <div>
            <h1 class="main-header__title">NÚCLEO</h1>
                <nav class="main-nav" id="main-nav">
                    <ul class="menu">
                        <li class="menu__item"><a href="index.html" class="menu__link">HOME</a></li>
                        <li class="menu__item"><a href="./html/mercado.html" class="menu__link">MERCADO</a></li>
                        <li class="menu__item"><a href="./html/contacto.html" class="menu__link">CONTACTO</a></li>
                    </ul>
                </nav>
        </div>
    )
}
export default NavBar;