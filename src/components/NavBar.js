import CardWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <div class="main-header__container">
            
                <span class="icon-menu" id="btn-menu"><i class="fas fa-bars"></i></span>
                <nav class="main-nav" id="main-nav">
                    <ul class="menu">
                        <li class="menu__item"><a href="index.html" class="menu__link">HOME</a></li>
                        <li class="menu__item"><a href="./html/mercado.html" class="menu__link">MERCADO</a></li>
                        <li class="menu__item"><a href="./html/contacto.html" class="menu__link">CONTACTO</a></li>
                    </ul>
                </nav>
            </div>
            <div class="main-header__container">
                <span class="main-header__txt">Necesitas ayuda?</span>
                <p class="main-header__txt"><i class="fas fa-phone"></i> Comunicate al (+54 9)223-544-74-57</p>
            </div>
            <CardWidget />
        </div>
    )
}
export default NavBar;