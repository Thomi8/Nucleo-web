export default function Footer () {
    return (
    <> 
    <footer className="main-footer">
        <div className="footer__section">
            <h2 className="footer__title">Sobre Nosotros</h2>
            <p className="footer__txt">Le ayudamos a ver el mundo a su alrededor. La excelencia de los conocimientos adquiridos en diversos campos de la óptica durante 20 años de investigación e innovación: una historia empresarial que ha creado nuevos hitos y ha cambiado vidas. </p>
        </div>
        <div className="footer__section">
            <h2 className="footer__title">Localidad :</h2>
            <p className="footer__txt">Provincia de Buenos Aires, Mar del Plata</p>
            <h2 className="footer__title">Contacto</h2>
            <p className="footer__txt">Teléfono : (+54 9)223-544-74-57</p>
            <p className="footer__txt">Email : vicecontethomas@gmail.com</p>
        </div>
        
        <div className="footer__section">
            <h2 className="footer__title">Suscribite y no te pierdas de las ofertas!</h2>
            <p className="footer__txt">Al suscribirse a nuestra lista de correo, siempre recibirá nuestras últimas noticias y actualizaciones.</p>
            <input type="email" className="footer__input" placeholder="Escribe tu email"></input> 
        </div>
        <p className="copy">© 2022 NÚCLEO. Reservados todos los derechos | Diseñado por ThomVic</p>
    </footer>
    </>
    );
}