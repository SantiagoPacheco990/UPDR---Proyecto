const Navegador = () =>{
    return(
        <div>
            <nav className="navegador">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Productos <span className="flechita_productos">&gt;</span></a></li>
                    <li><a href="#">Zapadas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navegador;