import './App.css'
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Seccion1 from './components/Seccion1'
import Navegador from './components/Navegador';
import Footer from './components/Footer'
import './estilos/Header1.css'
import './estilos/Header2.css'
import './estilos/Navegador.css'
import './estilos/Seccion1.css'
import './estilos/Footer.css'
import { BrowserRouter} from 'react-router-dom'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Header1/>
        <Header2/>
        <Navegador/>
        <Seccion1/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
