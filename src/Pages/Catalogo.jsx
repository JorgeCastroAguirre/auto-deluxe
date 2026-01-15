  import React,{useState,useEffect} from 'react'
  import LupaBoton from '../Componentes/LupaBoton' 
  import FiltrarBoton from '../Componentes/FiltrarBoton'
  import imagenEmpresa from '../Imagenes/imagen_empresa.jpeg'
  import Productos from '../Componentes/Productos'
  import {Link,useSearchParams} from 'react-router-dom'
  import '../Hojas-de-estilo/Catalogo.css'
  //Imagenes de productos
  import {listaProductos} from '../Data/listaProductos'
  function Catalogo() {

    const [searchParams, setSearchParams] = useSearchParams()

    const busquedaInicial = searchParams.get('buscar') || ''
    const precioInicial = Number(searchParams.get('precio')) || 200

    
  /*BUSQUEDA POR BARRA*/ 
    const [busqueda, setBusqueda] = useState(busquedaInicial)  


    const productosPorBusqueda = listaProductos.filter(producto =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )   

    const [buscadorAbierto, setBuscadorAbierto] = useState(false)
    
    const toggleBuscador=()=>{
      setBuscadorAbierto(true)
    }
    const cerrarBuscador=()=>{
      setBuscadorAbierto(false)
      
      
    }

    /*FILTRAR Y ORDENAR (abrir y cerrar panel)*/
    const [filtroAbierto, setFiltroAbierto] = useState(false)

    const Filtro_Abierto=()=>{
      setFiltroAbierto(true)
    }
    
    const Filtro_Cerrado=()=>{
      setFiltroAbierto(false)
    }


    /*FILTRAR POR EL PRECIO*/
    const [precioMax, setPrecioMax] = useState(precioInicial)
    
    const obtenerPrecioNumero = (precioTexto) => {
      return Number(
        precioTexto
          .replace('S/.', '')
          .replace('PEN', '')
          .trim()
      )
    }
    const productosPorPrecio = productosPorBusqueda.filter(producto => {
      const precioNumero = obtenerPrecioNumero(producto.precio)
      return precioNumero <= precioMax  
    })
    const productosFiltrados = productosPorPrecio

    useEffect(() => {
      setSearchParams({
        buscar: busqueda,
        precio: precioMax
      })
    }, [busqueda, precioMax])


    return (
      <>
        <div className='Contenedor_principal_1'>
          <div className='contenedor_barra_principal'>
            <div className='contenedor_texto'>
              <p className='texto'>Envios a todo Lima Metropolitana</p>
            </div>
            <div className='contenedor_barra_de_botones'>
              <FiltrarBoton
                abierto={Filtro_Abierto}
                cerrado={Filtro_Cerrado}
                estado={filtroAbierto}
                precioMax={precioMax}
                setPrecioMax={setPrecioMax}
                />
              <div className='contenedor_imagen'><img className='imagen'src={imagenEmpresa}/></div>
              <LupaBoton
                abierto={buscadorAbierto}
                ontoggle={toggleBuscador}
                cerrar={cerrarBuscador}
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                />            
            </div>
          </div>
          <div className='contenedor_de_todos_productos'>
            
              {productosFiltrados.map(producto => (
                <Link key={producto.id} to={`/catalogo/${producto.id}`}>
                  <Productos
                    key={producto.id}
                    imagen={producto.imagen}
                    nombre={producto.nombre}
                    precio={producto.precio}
                  />
                </Link>
            ))}
          
          </div>
        </div>
      </>
    )
  }

  export default Catalogo