import './App.css';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Seccion1 from './components/Seccion1';
import Navegador from './components/Navegador';
import Footer from './components/Footer';
import './estilos/Header1.css';
import './estilos/Header2.css';
import './estilos/Navegador.css';
import './estilos/Seccion1.css';
import './estilos/Footer.css';
import SobreNosotros from './pages/SobreNosotros'
import Productos from './pages/Productos'
import Zapadas from './pages/Zapadas';
import Contacto from './pages/Contacto';

import texturaAmarrillo from './imagenes/textura-amarrillo.png'
import texturaAzul from './imagenes/textura-azul.png'
import texturaNaranja from './imagenes/textura-naranja.png'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                {/*
                <Header1 />
                <div className="sticky-container">
                  <Header2 />
                  <Navegador />
                </div>
                */}
                 <Seccion1/>
                
                <div className="prueba">
                  <img src={texturaAzul} className="azul" />
                  <img src={texturaAmarrillo} className="amarrillo" />
                  <img src={texturaNaranja} className="naranja segunda-naranja" />
                  <div className="container_novedades">
                    <h1>Novedades</h1>
                  </div>
                  <img src={texturaAmarrillo} className="amarrillo" />
                  <img src={texturaAzul} className="azul segunda-azul" />
                  <img src={texturaNaranja} className="naranja" />
                </div>

                

                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>

                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <main>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem maxime soluta ullam doloremque accusamus adipisci vero, dicta beatae, 
                molestiae aut consequatur rerum expedita accusantium? 
                Repellendus neque praesentium perferendis sunt possimus!</main>
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<SobreNosotros/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/zapadas" element={<Zapadas/>}/>
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
