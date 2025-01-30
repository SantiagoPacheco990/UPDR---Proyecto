import { Link } from "react-router-dom";

const Navegador = () => {
    return (
        <div>
            <nav className="navegador">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Sobre nosotros</Link></li>
                    <li className="productos">
                        <Link to="/productos" className="link_producto">Productos
                            <span className="flechita_productos"> &gt;</span>
                        </Link>
                        <div className="nav_de_productos">
                            <ul className="opciones_producto">
                                <li><a href="#">Pilcha</a></li>
                                <li><a href="#">Para la sed</a></li>
                                <li><a href="#">Calcos 1PDR</a></li>
                                <li><a href="#">Para el ruido</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to="/zapadas">Zapadas</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navegador;
