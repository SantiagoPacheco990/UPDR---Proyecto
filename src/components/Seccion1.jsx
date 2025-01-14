import React from "react";
import globo_titulo from "../imagenes/globo-naranja.png";
import ojotas from "../imagenes/productos/ojotas.png";
import sudadera from "../imagenes/productos/sudadera.png";
import remera_blanca from "../imagenes/productos/remera-blanca.png";
import remera_negra from "../imagenes/productos/remera-negra.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Seccion1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Muestra 3 productos por vista
    slidesToScroll: 1, // Avanza 1 producto por clic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="seccion1">
      <div className="container_titulo">
        <img src={globo_titulo} alt="Globo Título" />
        <h1>Productos Piola</h1>
      </div>
      <Slider {...settings} className="slider">
        <div className="producto">
          <img src={ojotas} alt="Ojotas" />
          <h3 className="titulo_producto">OOOAAAjotas</h3>
          <h3 className="precio">$69.900,00</h3>
          <button className="btn-comprar">Comprar</button>
          <button className="btn-ver">Ver</button>
        </div>
        <div className="producto">
          <img src={sudadera} alt="Sudadera" />
          <h3 className="titulo_producto">Sudadera Mortal Cumbia</h3>
          <h3 className="precio">$41.990,00</h3>
          <button className="btn-comprar">Comprar</button>
          <button className="btn-ver">Ver</button>
        </div>
        <div className="producto">
          <img src={remera_blanca} alt="Remera Blanca" />
          <h3 className="titulo_producto">La BLANCA de UPDR</h3>
          <h3 className="precio">$29.000,00</h3>
          <button className="btn-comprar">Comprar</button>
          <button className="btn-ver">Ver</button>
        </div>
        <div className="producto">
          <img src={remera_negra} alt="Remera Negra" />
          <h3 className="titulo_producto">La NEGRA de UPDR</h3>
          <h3 className="precio">$29.000,00</h3>
          <button className="btn-comprar">Comprar</button>
          <button className="btn-ver">Ver</button>
        </div>
      </Slider>
    </section>
  );
};

export default Seccion1;
