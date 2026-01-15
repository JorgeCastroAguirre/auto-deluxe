
import {HashRouter, Routes, Route} from 'react-router-dom'
import Padre from './Componentes/Padre'
import Catalogo from './Pages/Catalogo'
import './App.css'
import Producto from './Componentes/Producto'


function App() {
  

  return (
    <>
    <HashRouter basename="/auto-deluxe">
      <Routes>
        <Route path="/" element={<Padre/>}/>
        <Route path="/catalogo" element={<Catalogo/>} /> 
        <Route path="/catalogo/:producto_id" element={<Producto/>} />
              
      </Routes>    
    </HashRouter>  
    </>
  )
}

export default App
