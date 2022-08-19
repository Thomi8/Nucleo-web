import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="main-header">
        <div  className="container container--flex">
            <div  className="main-header__container">
                <h1  className="main-header__title">NÚCLEO</h1>
                <span  className="icon-menu" id="btn-menu"><i  className="fas fa-bars"></i></span>
                <nav  className="main-nav" id="main-nav">
                    <ul  className="menu">
                        <li  className="menu__item"><a href="index.html" className="menu__link">HOME</a></li>
                        <li  className="menu__item"><a href="./html/mercado.html"  className="menu__link">MERCADO</a></li>
                        <li  className="menu__item"><a href="./html/contacto.html"  className="menu__link">CONTACTO</a></li>
                    </ul>
                </nav>
            </div>
            <div  className="main-header__container">
                <span  className="main-header__txt">Necesitas ayuda?</span>
                <p  className="main-header__txt"><i  className="fas fa-phone"></i> Comunicate al (+54 9)223-544-74-57</p>
            </div>
            <div  className="main-header__container">
                <a href=""  className="main-header__link"><i  className="fas fa-user"></i></a>
                <a href=""  className="main-header__btn">Mi carrito <i  className="fas fa-shopping-cart"></i></a>
                <input  type="search"  className="main-header__input" placeholder="Buscar productos"></input><i  className="fas fa-search"></i>
            </div>
        </div>
    </header>
  );
}

export default App;
