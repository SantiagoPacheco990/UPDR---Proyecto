import React, { useRef, useEffect } from "react";
import ojotasSec from "../imagenes/productos/ojotas.png";
import sudaderaSec from "../imagenes/productos/sudadera.png";
import remera_blancaSec from "../imagenes/productos/remera-blanca.png";
import remera_negraSec from "../imagenes/productos/remera-negra.png";
import flechita_scroll from "../imagenes/flecha.png";

const Section2 = () => {
  const sliderRef = useRef(null);
  const movePer = 25.34; // Porcentaje de movimiento por cada elemento
  const items = [
    { img: ojotasSec, title: "OOOAAAjotas", price: "$69.900,00" },
    { img: sudaderaSec, title: "Sudadera Mortal Cumbia", price: "$41.990,00" },
    { img: remera_blancaSec, title: "La BLANCA de UPDR", price: "$29.000,00" },
    { img: remera_negraSec, title: "La NEGRA de UPDR", price: "$29.000,00" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const firstClone = slider.firstElementChild.cloneNode(true);
      const lastClone = slider.lastElementChild.cloneNode(true);

      slider.appendChild(firstClone);
      slider.insertBefore(lastClone, slider.firstChild);

      // Posicionar el slider en el primer elemento real
      slider.style.transform = `translateX(-${movePer}%)`;
      slider.dataset.position = -movePer;
    }
  }, []);

  const handleTransitionEnd = () => {
    const slider = sliderRef.current;
    if (slider) {
      const position = parseFloat(slider.dataset.position);

      // Si estamos en el primer clon, saltar al último elemento real
      if (position === 0) {
        slider.style.transition = "none";
        slider.dataset.position = -(items.length * movePer);
        slider.style.transform = `translateX(${
          -(items.length * movePer)
        }%)`;
      }

      // Si estamos en el último clon, saltar al primer elemento real
      if (Math.abs(position) >= (items.length + 1) * movePer) {
        slider.style.transition = "none";
        slider.dataset.position = -movePer;
        slider.style.transform = `translateX(-${movePer}%)`;
      }
    }
  };

  const rightMover = () => {
    const slider = sliderRef.current;
    if (slider) {
      const position = parseFloat(slider.dataset.position) - movePer;
      slider.dataset.position = position;
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(${position}%)`;
    }
  };

  const leftMover = () => {
    const slider = sliderRef.current;
    if (slider) {
      const position = parseFloat(slider.dataset.position) + movePer;
      slider.dataset.position = position;
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(${position}%)`;
    }
  };

  return (
    <div>
      <section className="section2">
        <img
          src={flechita_scroll}
          className="flecha_scroll a"
          alt="Flecha izquierda"
          onClick={leftMover}
        />
        <div
          className="slider-container"
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
          style={{ display: "flex", transition: "transform 0.5s ease-in-out" }}
        >
          {items.map((item, index) => (
            <div className="producto_sec2" key={index}>
              <img src={item.img} alt={item.title} />
              <h3 className="titulo_producto_sec2">{item.title}</h3>
              <h3 className="precio_sec2">{item.price}</h3>
              <button className="btn-comprar_sec2">Comprar</button>
              <button className="btn-ver_sec2">Ver</button>
            </div>
          ))}
        </div>
        <img
          src={flechita_scroll}
          className="flecha_scroll"
          alt="Flecha derecha"
          onClick={rightMover}
        />
      </section>
    </div>
  );
};

export default Section2;
