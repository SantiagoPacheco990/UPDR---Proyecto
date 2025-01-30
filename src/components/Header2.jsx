import React, { useRef, useState } from 'react';
import logoUPDR from '../imagenes/Logo-UPDR.png';
import lupa from '../imagenes/lupa.png';
import logoAuricular from '../imagenes/auri-logo.png';
import introUPDR from '../imagenes/UN POCO DE RUIDO  MUSICA DE INTRO.mp3';
import logoUsuario from '../imagenes/usuario.png';
import logoAyuda from '../imagenes/ayuda.png';
import carrito from '../imagenes/carrito2.png';
import menu from '../imagenes/menu.png'

const Header2 = () => {
  const audioRef = useRef(null); // Crear una referencia al audio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si el audio está en reproducción

  const handleAudioPlay = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pausar el audio
      audioRef.current.currentTime = 0; // Reiniciar el audio
    } else {
      audioRef.current.play(); // Reproducir el audio
      audioRef.current.loop = true; // Hacer que el audio se repita infinitamente
    }
    setIsPlaying(!isPlaying); // Cambiar el estado de reproducción
  };

  return (
    <div>
      <header className="header2">
        <img src={menu} className='menu_hamburguesa'/>
        <div className="container_logo_ooaaa">
          <img src={logoUPDR} className="logo-UPDR" alt="Logo UPDR" />
          <div className="container-el-OAAA">
            <h1 className="OOAAA">
              <span className="OO">OO</span>
              <span className="AAA">AAA</span>
              <span className="OO">!!</span>
            </h1>
            <div className="container-OOAAA">
              <img
                src={logoAuricular}
                className={`boton-OOAAA ${isPlaying ? 'mover-derecha' : ''}`}
                alt="Logo Auricular"
                onClick={handleAudioPlay}
              />
            </div>
          </div>
        </div>
        <audio ref={audioRef} src={introUPDR} />
        <div className="container-buscador">
          <input type="text" className="buscador" placeholder="¿Qué estás buscando?" />
          <img src={lupa} className="lupa" />
        </div>
        <div className="container-opciones">
          <div className="container-ayuda">
            <img src={logoAyuda} className="opcion ayuda" />
            <p>Ayuda</p>
          </div>
          <div className="container-usuario">
            <img src={logoUsuario} className="opcion usuario" />
            <p>Mi cuenta</p>
          </div>
          <div className="container-carrito">
            <img src={carrito} className="opcion carrito" />
            <p>Mi carrito</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header2;
