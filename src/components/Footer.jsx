import logoInsta from '../imagenes/logo insta.png'
import logoFace from "../imagenes/logo-Face.png"
import logoYoutube from '../imagenes/logo-youtube.png'
import logoTikTok from '../imagenes/logo-tiktok.png'
import logoX from '../imagenes/logo-X.png'
import logoSpotify from "../imagenes/logo spotify.png"
import { Routes,Route, Link } from 'react-router-dom'

import ondaAmarillo from '../imagenes/onda-footer.png';

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <div className="borde-vertical a">
                    <div className="container-palabras">
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        {/* Duplicar palabras para un efecto continuo */}
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                    </div>
                </div>
                <div className="borde-vertical b">
                    <div className="container-palabras">
                    <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        {/* Duplicar palabras para un efecto continuo */}
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                        <span>STREAMING CUMBIA</span>
                        <span>-</span>
                    </div>
                </div>
                <div className="borde-horizontal a">
                    <div className="container-paralelogramo">
                        {/* Paralelogramos visibles */}
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        {/* Paralelogramos duplicados para continuidad */}
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                    </div>
                </div>
                <div className="borde-horizontal b">
                    <div className="container-paralelogramo">
                        {/* Paralelogramos visibles */}
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        {/* Paralelogramos duplicados para continuidad */}
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                        <div className="paralelogramo"></div>
                    </div>
                </div>
                <div className="container-footer">
                    <div className="container_onda">
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                    </div>

                    <div className="container_onda">
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                    </div>

                    <div className="container_onda">
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                    </div>
                    <div className="container_onda">
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                    </div>
                    <div className="container_onda">
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                        <img src={ondaAmarillo} className='onda_amarrilla'/>
                    </div>
                    <div className="container_categoria">
                        <h2>CATEGORIA</h2>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/about">Sobre Nosotros</Link></li>
                            <li><Link to="productos">Productos</Link></li>
                            <li><Link to="zapadas">Zapadas</Link></li>
                            <li><Link to="contacto">Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="container_contactanos">
                        <h2>CONTACTÁNOS</h2>
                        <ul>
                            <li><Link >5491133154387</Link></li>
                            <li><Link >91133154387</Link></li>
                            <li><Link >unpocoderuido89@gmail.com</Link></li>
                            <li><Link >Miguel Angel 3635</Link></li>
                        </ul>
                    </div>
                    <div className="container_redes_footer">
                        <h2>SEGUINOS EN NUESTRAS REDES</h2>
                        <div className="redes_sociales">
                            <div className="cuadrado_de_redes_sociales">
                                <img src={logoInsta} className='instagram'/>
                            </div>
                            <div className="cuadrado_de_redes_sociales">
                                <img src={logoFace} className='facebook'/>
                            </div>
                            <div className="cuadrado_de_redes_sociales">
                                <img src={logoYoutube} className='youtube'/>
                            </div>
                            <div className="cuadrado_de_redes_sociales">
                                <img src={logoTikTok} className='tik_tok'/>
                            </div>
                            <div className="cuadrado_de_redes_sociales">
                                <img src={logoX} className='twitter'/>
                            </div>
                            <div className="cuadrado_de_redes_sociales">
                                <img src={logoSpotify} className='spotify'/>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
