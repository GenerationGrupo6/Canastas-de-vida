import './Footer.css'

const Footer = ()=> {
    return(
    <footer>
        <div id="footer-Derecha">
            <div className="col1">
            <h4 className="footer-Main">CANASTAS DE VIDA</h4>
            <h5 className="HiperLink">calle de ejemplo #123,Santiago</h5>
            <h5 className="HiperLink">+(569) 5555 5555</h5>
            </div>
        </div>
        <div id="footer-Izquierda">
            <div className="col2">
            <h4 className="footer-Main">NUESTRO TRABAJO</h4>
            <h5 className="HiperLink">Acerca de</h5>
            <h5 className="HiperLink">Iniciativas</h5>
            <h5 className="HiperLink">Unete al cambio</h5>
            </div>
            <div className="col3">
            <h4 className="footer-Main">SIGUENOS</h4>
            <h5 className="HiperLink">Twitter</h5>
            <h5 className="HiperLink">Instagram</h5>
            <h5 className="HiperLink">Facebook</h5>
            </div>
        </div>
    </footer>
    )
}

export default Footer